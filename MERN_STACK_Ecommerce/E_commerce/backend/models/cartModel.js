import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    productName: String,
    productDetails: String,
    productPhoto: String,
    productPrice: String,

    user_id: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("cart", cartSchema);
