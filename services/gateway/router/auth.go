package router

import (
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
	"os"
)

func AuthRouter(app *fiber.App) {
	host := os.Getenv("AUTH_HOST")

	app.
		Group("/auth").
		Post("/login", proxy.Forward(host+"/auth/login")).
		Post("/signup", proxy.Forward(host+"/auth/signup")).
		Post("/refresh", proxy.Forward(host+"/auth/signup"))

	app.
		Group("/user").
		Post("/", proxy.Forward(host+"/user/")).
		Put("/", proxy.Forward(host+"/user/"))
}
