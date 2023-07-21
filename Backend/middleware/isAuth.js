const verifyToken = require("../auth/verifyToken");

const isAuth = (req, res, next) => {
    try {
        const authHeader = req.get("Authorization");
        
        const token = authHeader.split(" ")[1];

        const decodedToken = verifyToken(token);

        req.coachId = decodedToken.id;

        next(); 
    } catch(err) {
        res.status(401).json({ message: "Not authenticated." });
    }
}

module.exports = isAuth;