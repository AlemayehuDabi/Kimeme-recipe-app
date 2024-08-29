const jwt = require("jsonwebtoken");

const createToken = (payload, expiresIn) => {
  return jwt.sign(payload, process.env.JWT_PASS, { expiresIn: expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_PASS);
};

module.exports = {
  createToken,
  verifyToken,
};
