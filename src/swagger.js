import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Proyecto Ecommerce - Users API",
      version: "1.0.0",
      description: "Documentación de los endpoints de Users",
    },
  },
  apis: ["./src/routes/users.routes.js"], 
};

const specs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));
};
