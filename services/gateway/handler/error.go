package handler

import (
	"errors"
	fiber "github.com/gofiber/fiber/v2"
)

func ErrorHandler() func(c *fiber.Ctx, err error) error {
	return func(c *fiber.Ctx, err error) error { // Override default error handler
		code := fiber.StatusInternalServerError // default 500

		var e *fiber.Error
		if errors.As(err, &e) {
			code = e.Code
		}

		return c.Status(code).JSON(fiber.Map{
			"message": err.Error(),
		})
	}
}
