const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Temples API",
    description: "W02 Team Activity: Swagger documentation for temple routes",
  },
  host: "localhost:8080",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
