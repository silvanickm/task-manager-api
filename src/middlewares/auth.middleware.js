const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token not provided"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, "secretkey");

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid token"
        });
    }
}

module.exports = authMiddleware;
