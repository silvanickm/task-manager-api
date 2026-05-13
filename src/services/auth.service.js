const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRepository = require("../repositories/user.repository");

async function registerUser(email, password) {
    const users = await userRepository.readUsers();
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        id: Date.now(),
        email,
        password: hashedPassword
    };
    users.push(newUser);
    await userRepository.writeUsers(users);

    return {
        id: newUser.id,
        email: newUser.email
    };
}

async function loginUser(email, password) {
    const users = await userRepository.readUsers();
    const user = users.find(user => user.email === email);
    if (!user) {
        throw new Error("Invalid credentials");
    }
    const isPasswordValid = await bcrypt.compare(
        password,
        user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid credentials");
    }
    const token = jwt.sign(
        { userId: user.id },
        "secretkey",
        { expiresIn: "1h" }
    );
    return {
        token
    };


}

module.exports = {
    registerUser,
    loginUser
};