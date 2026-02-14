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


