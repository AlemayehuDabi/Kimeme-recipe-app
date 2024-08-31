const User = require("../../Model/UserModel/UserModel");
const mongoose = require("mongoose");
const errorHandle = require("../../util/Error");
const bcryptjs = require("bcryptjs");

// get user
const getUser = async (req, res, next) => {
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

// change Password
const changePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const user = req.user.id;
  try {
    if (!mongoose.isValidObjectId(user)) {
      return next(errorHandle(401, "invalid id"));
    }

    if (!oldPassword) {
      return next(errorHandle(401, "old password is required"));
    }

    if (!newPassword) {
      return next(errorHandle(401, "new password is required"));
    }

    const isUser = await User.findById(user);

    if (!isUser) {
      return next(errorHandle(401, "user is not found"));
    }

    const checkCredintial = bcryptjs.compareSync(oldPassword, isUser.password);

    if (!checkCredintial) {
      return next(errorHandle(401, "Crediential does not match"));
    }

    const hassedPassword = bcryptjs.hashSync(newPassword, 10);

    const updated = await User.findByIdAndUpdate(
      isUser.id,
      { password: hassedPassword },
      {
        new: true,
      }
    );

    if (!updated) {
      return next(errorHandle(401, "not updated"));
    }

    const { password: pass, ...rest } = updated._doc;

    return res.status(200).json({
      status: true,
      msg: "password changed successfully",
      rest,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getUser,
  deleteUser,
  changePassword,
};
