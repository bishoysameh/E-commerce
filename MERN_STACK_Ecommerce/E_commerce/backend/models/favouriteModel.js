import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema(
  {
    productName: String,
    productDetails: String,
    productPhoto: String,
    productPrice: String,

    user_id: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("favourite", favouriteSchema);
