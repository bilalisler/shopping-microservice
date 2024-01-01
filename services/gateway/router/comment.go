package router

import (
	"gateway/middleware"
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
	"os"
)

func CommentRouter(app *fiber.App) {
	host := os.Getenv("COMMENT_HOST")

	app.
		Group("/comment", middleware.VerifyToken()).
		Get("/", proxy.Forward(host+"/")).
		Post("/", middleware.VerifyToken(), proxy.Forward(host+"/")).
		Put("/", middleware.VerifyToken(), proxy.Forward(host+"/")).
		Delete("/", middleware.VerifyToken(), proxy.Forward(host+"/"))
}
