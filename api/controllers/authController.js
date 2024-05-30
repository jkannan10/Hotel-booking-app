import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import createError from "../utils/createError.js";
/* Register */

export const register = async (req, res, next) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: hashedPwd,
      email: req.body.email,
    });
    await newUser.save();
    return res.status(201).send("newUser has been created.");
  } catch (err) {
    next(err);
  }
};

/* Login */

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found."));
    const isPwd = await bcrypt.compare(req.body.password, user.password);
    if (!isPwd) return next(createError(400, "Invalid Password"));
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.ACCESS_TOKEN
    );
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(201)
      .send("Login Successful");
  } catch (err) {
    next(err);
  }
};
