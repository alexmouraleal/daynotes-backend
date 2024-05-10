const express = require("express");
const routes = express.Router();

const AnnotationController = require("./controllers/AnnotationController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");
const TaskController = require("./controllers/TaskController");

// Rota Annotations
routes.post("/annotations", AnnotationController.create);
routes.get("/annotations", AnnotationController.read);
routes.delete("/annotations/:id", AnnotationController.delete);

// Rota Priority
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

// Rota Content
routes.post("/contents/:id", ContentController.update);

// ------------------------- TASKS ---------------------------
// Rota Tasks (CRUD)
routes.post("/tasks", TaskController.create);
routes.get("/tasks", TaskController.read);
routes.post("/tasks/:id", TaskController.update);
routes.post("/tasksstatus/:id", TaskController.updatestatus);
routes.post("/taskswkreset", TaskController.updatewkreset);
routes.delete("/tasks/:id", TaskController.delete);

module.exports = routes;
