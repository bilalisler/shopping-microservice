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
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				host,
			},
		})).
		Post("/login", proxy.Forward("/auth/login")).
		Post("/signup", proxy.Forward("/auth/signup")).
		Post("/refresh", proxy.Forward("/auth/signup"))

	app.
		Group("/user").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				host,
			},
		})).
		Post("/", proxy.Forward("/user/"))
}
