const User = require("../../Model/UserModel/UserModel");
const bcryptjs = require("bcryptjs");
const { createToken } = require("../../util/token");
const errorHandle = require("../../util/Error");

// sign up
const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !password || !email) {
      return next(errorHandle(400, "username, email, password is require"));
    }

    const emailExist = await User.findOne({ email: email });

    if (emailExist) {
      return next(errorHandle(400, "email already exist"));
    }

    const hassedPassword = bcryptjs.hashSync(password, 10);

    const user = await User.create({
      username,
      email,
      password: hassedPassword,
    });

    const payload = {
      username: user.username,
      id: user._id,
    };

    const token = createToken(payload, "1h");

    const { password: pass, ...rest } = user._doc;

    return res
      .status(200)
      .cookie("Access_Token", token, { httpOnly: true })
      .json({
        status: true,
        msg: "successfully create account",
        rest,
      });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  signUp,
};
