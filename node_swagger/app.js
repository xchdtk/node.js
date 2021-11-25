const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const options = {
  swaggerDefinition: {
    info: {
      title: "Test API",
      version: "1.0.0",
      description: "Test API with express",
    },
    host: "localhost:3300",
    basePath: "/",
  },
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 *  /product:
 *    get:
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 *        schema:
 *          $ref: '#/components/schemas/Product'
 * 
 * 
 */
app.get("/product", (req, res) => {
  res.send("customer relults");
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
