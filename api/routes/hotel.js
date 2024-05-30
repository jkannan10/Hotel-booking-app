import express from "express";
import { verifyAdmin } from "../utils/verifyJWT.js";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  countByCity,
  countByType,
  getHotels,
  getByPrice,
  getHotelRooms,
} from "../controllers/hotelController.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/find/:id", getHotel);
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/searchByCity", getHotels);
router.get("/refetch", getByPrice);
router.get("/room/:id", getHotelRooms);
export default router;
