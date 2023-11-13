package main

import (
	"gateway/router"
	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"log"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	app := fiber.New()
	app.Use(cors.New())

	router.ProductRouter(app)
	router.AuthRouter(app)
	router.CommentRouter(app)
	router.HealthRouter(app)

	log.Fatal(app.Listen(":3000"))
}
