import express from "express";
import { verifyAdmin, verifyJWT, verifyUser } from "../utils/verifyJWT.js";

import {
  updateUser,
  deleteUser,
  getAllUser,
  getUser,
} from "../controllers/userController.js";
const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getAllUser);

export default router;
