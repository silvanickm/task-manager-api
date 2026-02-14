let tasks = [];

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.createTask = (req, res) => {
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title é obrigatório" });
    }

    const newTask = {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(newTask);

    res.status(201).json(newTask);
};
exports.getTaskById = (req, res) => {
    const { id } = req.params;

    const task = tasks.find(t => t.id == id);

    if (!task) {
        return res.status(404).json({ message: "Task não encontrada" });
    }

    res.status(200).json(task);
};
exports.deleteTask = (req, res) => {
    const { id } = req.params;

    const taskIndex = tasks.findIndex(t => t.id == id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task não encontrada" });
    }

    tasks.splice(taskIndex, 1);

    res.status(200).json({ message: "Task removida com sucesso" });
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title é obrigatório" });
    }

    const taskIndex = tasks.findIndex(t => t.id == id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task não encontrada" });
    }

    tasks[taskIndex].title = title;

    res.status(200).json(tasks[taskIndex]);
};