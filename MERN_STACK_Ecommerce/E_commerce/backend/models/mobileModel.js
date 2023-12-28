import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    details: String,
    phoneImagePath: String,
    price: String,
    camera: String,
    display: String,
    processor: String,
    battery: String,
  },
  { timestamps: true }
);

export default mongoose.model("mobiles", mobileSchema);
