import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
  res.status(200).json(newRoom);
};

/* put */

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
/* delete */
export const deleteRoom = async (req, res, next) => {
  try {
    // Remove the room id from the existing hotel
    const savedRoom = await Hotel.findByIdAndUpdate(req.params.hotelId, {
      $pull: { rooms: req.params.id },
    });
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedRoom);
  } catch (err) {
    next(err);
  }
};
/* retireve All */

export const getAllRoom = async (req, res, next) => {
  try {
    const room = await Room.find();
    res.status(201).json(room);
  } catch (err) {
    next(err);
  }
};
/* Retieve One*/
export const getRoom = async (req, res, next) => {
  try {
    const room = await Hotel.findById(req.params.id);
    res.status(201).json(room);
  } catch (err) {
    next(err);
  }
};

/* Room availability */
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};
