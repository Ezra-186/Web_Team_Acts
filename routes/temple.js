const routes = require("express").Router();
const temples = require("../controllers/temple.js");

/* #swagger.tags = ["Temples"] */
routes.get(
  "/",
  /* #swagger.summary = "Get all temples" */
  /* #swagger.description = "Returns all temples. Requires apiKey header." */
  /* #swagger.parameters["apiKey"] = { in: "header", required: true, type: "string" } */
  temples.findAll
);

routes.get(
  "/:temple_id",
  /* #swagger.summary = "Get one temple by temple_id" */
  /* #swagger.description = "Returns one temple. Requires apiKey header." */
  /* #swagger.parameters["apiKey"] = { in: "header", required: true, type: "string" } */
  /* #swagger.parameters["temple_id"] = { in: "path", required: true, type: "number" } */
  temples.findOne
);

routes.post(
  "/",
  /* #swagger.summary = "Create a temple" */
  /* #swagger.parameters["body"] = {
      in: "body",
      required: true,
      schema: { temple_id: 999, name: "Example Temple", location: "Somewhere", dedicated: "2026-01-01", additionalInfo: false }
  } */
  temples.create
);

module.exports = routes;
