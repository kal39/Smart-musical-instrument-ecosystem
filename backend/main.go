package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

func main() {
	_ = godotenv.Load()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	dbURL := os.Getenv("DATABASE_URL")
	if dbURL != "" {
		var err error
		db, err = gorm.Open(postgres.Open(dbURL), &gorm.Config{})
		if err != nil {
			log.Printf("⚠️ Database Warning: Could not connect to Neon Postgres: %v\n", err)
		} else {
			fmt.Println("⚡ Connected to Neon PostgreSQL Database successfully!")
		}
	} else {
		log.Println("Database configuration missing. Running in standalone mode.")
	}

	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()

	r.Use(func(c *gin.Context) {
		allowedOrigin := os.Getenv("ALLOWED_ORIGIN")
		if allowedOrigin == "" {
			allowedOrigin = "*"
		}

		c.Writer.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	})

	r.POST("/api/v1/nodes/initialize", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":    "Authorized",
			"timestamp": "Handshake Success",
		})
	})

	log.Printf("🚀 AURA BACKEND LIVE ON PORT %s\n", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Server startup failed: %v", err)
	}
}
