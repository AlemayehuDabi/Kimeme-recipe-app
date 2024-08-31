const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if the header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        status: false,
        msg: "Authorization header is missing or malformed",
      });
    }

    // Extract the token
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "12345", (err, user) => {
      if (err) {
        return res.status(401).json({
          status: false,
          msg: "token expire or invalid",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      msg: "Internal server error",
    });
  }
};

module.exports = authMiddleWare;
