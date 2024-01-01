package middleware

import (
	"fmt"
	fiber "github.com/gofiber/fiber/v2"
	jwt "github.com/golang-jwt/jwt/v5"
	"strings"
)

type UserClaims struct {
	Id     string `json:"_id"`
	Email  string `json:"email"`
	Gender string `json:"gender"`
	jwt.RegisteredClaims
}

func VerifyToken() func(c *fiber.Ctx) error {
	return func(c *fiber.Ctx) error {
		var authorization = c.Get(fiber.HeaderAuthorization)

		//return fiber.NewError(fiber.StatusServiceUnavailable, "On vacation!")

		if len(authorization) == 0 {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Authorization was failed",
			})
		}

		if !strings.HasPrefix(authorization, "Bearer ") {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Authorization was failed",
			})
		}

		token := strings.TrimSpace(strings.Replace(authorization, "Bearer", "", 1))

		user, err := parseToken(token)
		if err != nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Authorization was failed",
			})
		}

		c.Locals("user", user)

		return c.Next()
	}
}

func parseToken(tokenString string) (*UserClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &UserClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte("supersecret"), nil
	})

	if err != nil {
		return nil, err
	} else if claims, ok := token.Claims.(*UserClaims); ok {
		return claims, nil
	} else {
		return nil, err
	}
}
