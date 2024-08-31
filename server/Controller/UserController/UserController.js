const User = require("../../Model/UserModel/UserModel");
const mongoose = require("mongoose");
const errorHandle = require("../../util/Error");

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

// delete user
const deleteUser = async (req, res, next) => {
  const user = req.user.id;
  try {
    if (!mongoose.isValidObjectId(user)) {
      return next(errorHandle(400, "Invalid Id"));
    }

    const isUser = await User.findOne({ _id: user });

    if (!isUser) {
      return next(errorHandle(404, "user is not found!"));
    }

    const userDeleted = await isUser.deleteOne();

    return res.status(200).json({
      status: true,
      msg: "user deleted",
      userDeleted,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getUser,
  deleteUser,
};
