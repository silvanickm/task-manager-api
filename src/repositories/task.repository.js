const fs = require("fs").promises;
const path = require("path");


const filePath = path.join(process.cwd(), "tasks.json");

async function readTasks() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeTasks(tasks) {
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
}

module.exports = {
  readTasks,
  writeTasks,
};