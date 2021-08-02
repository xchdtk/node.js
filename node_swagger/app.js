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
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "justin",
      },
      servers: ["http://localhost:3000"],
    },
  },
  // ['./routes/*.js]
  apis: ["api.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *     description: use to request all customers
 *     responses:
 *       '200':
 *         description: a successful respons
 */
app.get("/customers", (req, res) => {
  res.send("customer relults");
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
