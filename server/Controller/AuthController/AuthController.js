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

// login
const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return next(errorHandle(400, "email and password are required"));
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandle(400, "email doesn't exist"));
    }

    const isMatch = bcryptjs.compareSync(password, user.password);

    if (!isMatch) {
      return next(errorHandle(400, "incorrect crediential"));
    }

    const payload = {
      username: user.username,
      id: user._id,
    };

    const token = createToken(payload, "1h");

    const { password: pass, ...rest } = user._doc;

    return res
      .status(200)
      .cookie("Access_Token", token, {
        httpOnly: true,
      })
      .json({
        status: true,
        msg: "successfuly logged in",
        rest,
      });
  } catch (error) {
    return next(error);
  }
};

// Forget Password
const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return next(errorHandle(401, "Email is required"));
    }
    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandle(401, "Email is found"));
    }

    const token = createToken({ id: user._id }, "10min");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Forget Password",
      text: `http://localhost:5173/${token}`,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        return next(errorHandle(500, "Error while sending an email"));
      } else {
        return res.status(200).json({
          status: false,
          msg: "email sent successfully",
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  login,
  forgetPassword,
};
