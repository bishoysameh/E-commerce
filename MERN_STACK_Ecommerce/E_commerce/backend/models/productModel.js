import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productType: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productDetails: {
      type: String,
      required: true,
    },

    productPhoto: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", productSchema);
