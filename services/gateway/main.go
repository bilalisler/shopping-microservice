package main

import (
	"gateway/handler"
	"gateway/router"
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"
	"log"
)

func main() {
	var err = godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	app := fiber.New(fiber.Config{
		ErrorHandler: handler.ErrorHandler(),
	})
	app.Use(func(c *fiber.Ctx) error {
		if len(c.Accepts("application/json")) == 0 {
			return c.Status(500).JSON(fiber.Map{
				"message": "Invalid Accept",
			})
		}
		return c.Next()
	})
	app.Use(recover.New())
	app.Use(cors.New())

	router.ProductRouter(app)
	router.AuthRouter(app)
	router.CommentRouter(app)
	router.HealthRouter(app)
	router.CartRouter(app)

	log.Fatal(app.Listen(":3000"))
}
