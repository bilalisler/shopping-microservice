package router

import (
	"gateway/middleware"
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
	"os"
)

func ProductRouter(app *fiber.App) {
	host := os.Getenv("PRODUCT_HOST")

	app.
		Group("/category").
		Get("/:slug", func(c *fiber.Ctx) error {
			return proxy.Do(c, host+"/api/category/"+c.Params("slug"))
		}).
		Get("/:slug/products", func(c *fiber.Ctx) error {
			return proxy.Do(c, host+"/api/category/"+c.Params("slug")+"/products")
		}).
		Get("/list", proxy.Forward(host+"/api/category/list")).
		Post("/", middleware.VerifyToken(), proxy.Forward(host+"/api/category/")).
		Put("/", middleware.VerifyToken(), proxy.Forward(host+"/api/category/")).
		Delete("/", middleware.VerifyToken(), proxy.Forward(host+"/api/category/"))

	app.
		Group("/product").
		Get("/:slug", func(c *fiber.Ctx) error {
			return proxy.Do(c, host+"/api/product/"+c.Params("slug"))
		}).
		Get("/list", proxy.Forward(host+"/api/product/list")).
		Post("/", middleware.VerifyToken(), proxy.Forward(host+"/api/product/")).
		Put("/", middleware.VerifyToken(), proxy.Forward(host+"/api/product/")).
		Delete("/", middleware.VerifyToken(), proxy.Forward(host+"/api/product/"))

	app.
		Group("/brand").
		Get("/:slug", func(c *fiber.Ctx) error {
			return proxy.Do(c, host+"/api/brand/"+c.Params("slug"))
		}).
		Get("/list", proxy.Forward(host+"/api/brand/list")).
		Post("/", middleware.VerifyToken(), proxy.Forward(host+"/api/brand/")).
		Put("/", middleware.VerifyToken(), proxy.Forward(host+"/api/brand/")).
		Delete("/", middleware.VerifyToken(), proxy.Forward(host+"/api/brand/"))

	app.
		Group("/gallery").
		Get("/:slug", func(c *fiber.Ctx) error {
			return proxy.Do(c, host+"/api/gallery/"+c.Params("slug"))
		}).
		Get("/list", proxy.Forward(host+"/api/gallery/list")).
		Post("/", middleware.VerifyToken(), proxy.Forward(host+"/api/gallery/")).
		Put("/", middleware.VerifyToken(), proxy.Forward(host+"/api/gallery/")).
		Delete("/", middleware.VerifyToken(), proxy.Forward(host+"/api/gallery/"))

}
