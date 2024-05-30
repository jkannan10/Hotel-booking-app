import createError from "./createError.js";
import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(409, "You are not authenticated.."));
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return next(createError(403, "Token is not valid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyJWT(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized.."));
    }
  });
};
export const verifyAdmin = (req, res, next) => {
  verifyJWT(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized.."));
    }
  });
};
