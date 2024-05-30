import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
});
export default mongoose.model("Room", roomSchema);
/*
[
{number :101 , unavailableDates:[15.03.2004 , 26.07.2004]}
{number :102 , unavailableDates:[15.08.2004, 26.09.2004]}
{number :103 , unavailableDates:[15.09.2004 , 26.05.2004]}
{number :104 , unavailableDates:[15.01.2004 , 26.10.2004]}

]
*/
