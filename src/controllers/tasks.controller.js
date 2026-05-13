let tasks = [];

const taskService = require("../services/task.service");

exports.getTasks = async (req, res) => {
    const tasks = await taskService.getAllTasks();

    res.status(200).json(tasks);
};

exports.getTaskById = async (req, res) => {
    await readTasks();

    const { id } = req.params;
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task não encontrada" });
    }
    res.status(200).json(task);
};

exports.createTask = async (req, res) => {
    await readTasks();

    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title é obrigatorio" });

    }

    const newTask = {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date()
    };

    tasks.push(newTask);

    await writeTasks(tasks);

    res.status(201).json(newTask);
};

exports.deleteTask = async (req, res) => {
    await readTasks();

    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task nao encontrada" });
    }

    tasks.splice(taskIndex, 1);

    await writeTasks(tasks);

    res.status(200).json({ message: "Task removida com sucesso" });

};

exports.updateTask = async (req, res) => {
    await readTasks();

    const { id } = req.params;
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title é obrigatorio" });
    }

    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task nao encontrada" });
    }

    tasks[taskIndex].title = title;

    await writeTasks(tasks);

    res.status(200).json(tasks[taskIndex]);
}