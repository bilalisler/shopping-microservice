package router

import (
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func UserRouter(app *fiber.App) {
	app.
		Group("/user").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				"http://localhost:3002",
			},
		})).
		Post("/", proxy.Forward("/user/"))
}
