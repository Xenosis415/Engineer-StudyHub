// middleware/auth.js
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // Add user info to request
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export default auth;
