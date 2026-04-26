package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	// Set Gin to Release Mode to reduce logs and potential overhead
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()

	r.Use(func(c *gin.Context) {
    c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
    c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
    c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    
    if c.Request.Method == "OPTIONS" {
        c.AbortWithStatus(204)
        return
    }
    c.Next()
})

	// FORCED CORS MIDDLEWARE
	r.Use(func(c *gin.Context) {
		// Allows any origin for local dev to ensure the fetch clears
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*") 
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		
		// Handle Preflight OPTIONS request
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	})

	r.POST("/api/v1/nodes/initialize", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "Authorized", "timestamp": "Handshake Success"})
	})

	println("🚀 AURA BACKEND LIVE ON http://127.0.0.1:8080")
	// Binding to 127.0.0.1 explicitly to match the frontend call
	r.Run("127.0.0.1:8080")
}