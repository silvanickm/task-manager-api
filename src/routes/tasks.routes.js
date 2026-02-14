const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks.controller");

router.get("/", tasksController.getTasks);
router.post("/", tasksController.createTask);

module.exports = router;
