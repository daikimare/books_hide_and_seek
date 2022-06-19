package main

import (
  // "fmt"
  "github.com/gin-gonic/gin"
)

func main() {
	// fmt.println("hoge")
  r := gin.Default();
  r.GET("/" , func (c *gin.Context){
    c.JSON(200, gin.H{
      "message": "HelloWorld!!!",
    })
  })
  r.Run(":8080")
}
