package router

import (
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func AuthRouter(app *fiber.App) {
	app.
		Group("/auth").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				"http://localhost:3002",
			},
		})).
		Post("/login", proxy.Forward("/auth/login")).
		Post("/signup", proxy.Forward("/auth/signup")).
		Post("/refresh", proxy.Forward("/auth/signup"))
}
