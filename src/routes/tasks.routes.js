const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, tasksController.getTasks);
router.get("/:id", authMiddleware, tasksController.getTaskById);
router.post("/", authMiddleware, tasksController.createTask);
router.put("/:id", authMiddleware, tasksController.updateTask);
router.delete("/:id", authMiddleware, tasksController.deleteTask);


module.exports = router;
