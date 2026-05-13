const taskRepository = require("../repositories/task.repository");

async function getAllTasks() {
    const tasks = await taskRepository.readTasks();
    return tasks;
}

async function readTasks() {
    return getAllTasks();
}

module.exports = {
    getAllTasks,
    readTasks,
};