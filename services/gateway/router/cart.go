package router

import (
	"gateway/middleware"
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
	"os"
)

func CartRouter(app *fiber.App) {
	host := os.Getenv("CART_HOST")

    app.
        Group("/cart", middleware.VerifyToken()).
        Get("/", proxy.Forward(host+"/")).
        Post("/", proxy.Forward(host+"/")).
        Put("/", proxy.Forward(host+"/")).
        Delete("/", proxy.Forward(host+"/"))

}
