package router

import (
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
	"os"
)

func CommentRouter(app *fiber.App) {
	host := os.Getenv("COMMENT_HOST")

	app.
		Group("/comment").
		Get("/", proxy.Forward(host+"/")).
		Post("/", proxy.Forward(host+"/")).
		Put("/", proxy.Forward(host+"/")).
		Delete("/", proxy.Forward(host+"/"))
}
