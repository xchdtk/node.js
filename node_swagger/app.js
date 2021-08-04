const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Schools API",
      description: "Customer API Information",
      contact: {
        name: "justin",
      },
      servers: ["http://localhost:3000"],
    },
  },
  // ['./routes/*.js]
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *   get:
 *     tags:
 *       - Schools
 *     name: Get School
 *     summary: Get School
 *     parameters:
 *       - in: query
 *         name: schoolName
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *     responses:
 *       '200':
 *         description: Get one School
 *       '404':
 *         fail
 */
app.get("/customers", (req, res) => {
  res.send("customer relults");
});

/**
 * @swagger
 * /customers:
 *   post:
 *     tags:
 *       - Customers
 *     name: Register Customers
 *     summary: Register Customers
 *     parameters:
 *       - name: body
 *         in: body
 *         schema: object
 *         properties:
 *           name:
 *             type: string
 *           type:
 *             type: string
 *           address:
 *             type: string
 *         example:
 *           name: customerOne
 *           type: High
 *           address: gangnam
 *     responses:
 *       '200':
 *         description: register one school
 *       '404':
 *         fail
 *
 */
app.post("/customers", (req, res) => {
  res.send("손님이 추가되었습니다.");
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
