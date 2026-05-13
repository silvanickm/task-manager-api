const authService = require('../services/auth.service');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await authService.registerUser(
            email,
            password
        );

        res.status(201).json(user);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.loginUser(
            email,
            password
        );

        res.status(200).json(result);

    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};