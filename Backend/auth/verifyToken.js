const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  const paylaod = jwt.verify(token, process.env.JWT_SECRET);
  return paylaod;
};

module.exports = verifyToken;
