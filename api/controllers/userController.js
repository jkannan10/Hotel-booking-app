import User from "../models/User.js";

/* put */

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedUser); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};
/* delete */
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedUser); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};
/* retireve All */

export const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(201).json(user); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};
/* Retieve One*/
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json(user); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};
