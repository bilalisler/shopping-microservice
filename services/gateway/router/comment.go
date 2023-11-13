package router

import (
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
	"os"
)

func CommentRouter(app *fiber.App) {
	host := os.Getenv("COMMENT_HOST")

	app.
		Group("/auth").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				host,
			},
		})).
		Post("/", proxy.Forward("/")).
		Put("/", proxy.Forward("/")).
		Get("/", proxy.Forward("/")).
		Delete("/", proxy.Forward("/"))
}
