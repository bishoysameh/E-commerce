import cartModel from "../models/cartModel.js";
import mongoose from "mongoose";

export const getAllCart = async (req, res) => {
  const user_id = req.user._id;
  const cart = await cartModel.find({ user_id });
  res.status(200).json(cart);
};

export const addProductToCart = async (req, res) => {
  try {
    const user_id = req.user._id;
    const newProduct = await cartModel.create({ ...req.body, user_id });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const objectId = mongoose.Types.ObjectId(id);

    const deleteProduct = await cartModel.findByIdAndDelete(objectId);

    if (deleteProduct) {
      res.status(200).json({ message: "Deleted successfully" });
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
