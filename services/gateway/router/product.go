package router

import (
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
	"os"
)

func ProductRouter(app *fiber.App) {
	host := os.Getenv("PRODUCT_HOST")

	app.
		Group("/product").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				host,
			},
		})).
		Get("/list", proxy.Forward("/list")).
		Get("/:slug", proxy.Forward("/:slug")).
		Post("/", proxy.Forward("/")).
		Get("/", proxy.Forward("/")).
		Put("/", proxy.Forward("/")).
		Delete("/", proxy.Forward("/"))

	app.
		Group("/category").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				host,
			},
		})).
		Get("/list", proxy.Forward("/list")).
		Get("/:slug", proxy.Forward("/:slug")).
		Get("/:slug/products", proxy.Forward("/:slug/products")).
		Post("/", proxy.Forward("/")).
		Get("/", proxy.Forward("/")).
		Put("/", proxy.Forward("/")).
		Delete("/", proxy.Forward("/"))

	app.
		Group("/brand").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				host,
			},
		})).
		Get("/list", proxy.Forward("/list")).
		Get("/:slug", proxy.Forward("/:slug")).
		Post("/", proxy.Forward("/")).
		Get("/", proxy.Forward("/")).
		Put("/", proxy.Forward("/")).
		Delete("/", proxy.Forward("/"))

	app.
		Group("/gallery").
		Use(proxy.Balancer(proxy.Config{
			Servers: []string{
				host,
			},
		})).
		Get("/list", proxy.Forward("/list")).
		Post("/", proxy.Forward("/")).
		Get("/", proxy.Forward("/")).
		Put("/", proxy.Forward("/")).
		Delete("/", proxy.Forward("/"))
}
