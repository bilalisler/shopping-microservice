package router

import (
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func ProductRouter(app *fiber.App) {
	app.
		Group("/auth").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				"http://localhost:3002",
			},
			/**
			ModifyRequest: func(c *fiber.Ctx) error {
				c.Request().Header.Add("Authorization", "TOKEN")
				return nil
			},
			*/
		})).
		Post("/login", proxy.Forward("/auth/login"))
}
