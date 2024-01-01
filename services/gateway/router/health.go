package router

import (
	fiber "github.com/gofiber/fiber/v2"
)

func HealthRouter(app *fiber.App) {
	app.
		Get("/health/check", func(c *fiber.Ctx) error {
			return c.Status(fiber.StatusOK).JSON(fiber.Map{
				"status": "success Gateway",
			})
		})
}
