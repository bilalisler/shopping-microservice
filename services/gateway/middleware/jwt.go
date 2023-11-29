package middleware

import (
	"fmt"
	jwt "github.com/golang-jwt/jwt/v5"
	"log"
)

func Jwt() {
	tokenString := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiZ2VuZGVyIjoiaW5pdCIsImZ1bGxOYW1lIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsInN0YXR1cyI6ImluaXQiLCJfaWQiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsicmVxdWlyZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9pZCI6dHJ1ZSwiZW1haWwiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJmdWxsTmFtZSI6dHJ1ZSwiZ2VuZGVyIjp0cnVlLCJzdGF0dXMiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2NTNkNzNiZTExN2RjZjI1ZmFmMjljNzYiLCJlbWFpbCI6InRlc3Q2NkB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJEV0M1NZRkhrWi5aSVRZMWo5TDRtSnVBWlUudUNKODlXeWVKTHJocFh5STRCU1hMakNBdEhXIiwiZnVsbE5hbWUiOiJ0ZXN0IDMiLCJnZW5kZXIiOiJGIiwic3RhdHVzIjp0cnVlLCJfX3YiOjB9LCJpYXQiOjE2OTk5Mzk4MjgsImV4cCI6MTY5OTk3NTgyOH0.1e2vrdetQ9dmA610Q-IMR46L0LQOXCztb-ibQJzL_Tg"

	type MyCustomClaims struct {
		FullName string `json:"fullName"`
		jwt.RegisteredClaims
	}

	token, err := jwt.ParseWithClaims(tokenString, &MyCustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte("supersecret"), nil
	})

	if err != nil {
		log.Fatal(err)
	} else if claims, ok := token.Claims.(*MyCustomClaims); ok {
		fmt.Println(claims)
	} else {
		log.Fatal("unknown claims type, cannot proceed")
	}

}
