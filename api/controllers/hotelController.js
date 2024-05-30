import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
/* post */

export const createHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel); // 201 Created status for successful resource creation
  } catch (err) {
    console.error(err);
    next(err);
  }
};
/* put */

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedHotel); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};
/* delete */
export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedHotel); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};
/* retireve All */

export const getAllHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.find(req.query);
    res.status(201).json(hotel); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};
/* Retieve One*/
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(201).json(hotel); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};

/* count by city */

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  //console.log(cities);
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

/* count by type */
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Hotel", count: hotelCount },
      { type: "Apartments", count: apartmentCount },
      { type: "Resorts", count: resortCount },
      { type: "Villas", count: villaCount },
      { type: "Cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};
/* Search By City */
export const getHotels = async (req, res, next) => {
  try {
    const hotel = await Hotel.find({ city: req.query.city });
    res.status(201).json(hotel); // 201 Created status for successful resource creation
  } catch (err) {
    next(err);
  }
};
/* search by price */
export const getByPrice = async (req, res, next) => {
  const { min, max, city } = req.query;
  try {
    // console.log(min + " " + max + " " + city);
    const hotel = await Hotel.find({
      city: city,
      cheapestprice: { $gt: min || 1, $lt: max || 999 },
    });
    // console.log(hotel);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

/* Select Hotel Rooms */
export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
