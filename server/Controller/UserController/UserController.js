const User = require("../../Model/UserModel/UserModel");
const mongoose = require("mongoose");

// get user
const getUser = async (req, res) => {
  try {
    const user = req.user.id;

    if (!mongoose.isValidObjectId(user)) {
      return next(errorHandle(401, "invalid id"));
    }

    const isUser = await User.findOne({ _id: user });

    if (!isUser) {
      return next(errorHandle(401, "user is not found"));
    }

    const { password: pass, ...rest } = isUser._doc;

    return res.json({
      status: true,
      msg: "get user",
      rest,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getUser,
};
