const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../../users.json");

async function readUsers() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeUsers(users) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}

module.exports = {
  readUsers,
  writeUsers
};