const errorMiddle = (error, req, res, next) => {
  const sattusCode = error.sattusCode || 500;
  const message = error.message || "Internal server error";
  res.status(sattusCode).json({
    status: false,
    msg: message,
  });
};

module.exports = errorMiddle;
