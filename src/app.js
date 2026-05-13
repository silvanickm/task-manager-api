const express = require("express");
const tasksRoutes = require("./routes/tasks.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.use("/tasks", tasksRoutes);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Task Manager API 🚀" });
});

module.exports = app;
