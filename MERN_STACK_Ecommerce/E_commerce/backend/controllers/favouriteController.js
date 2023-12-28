import favouriteModel from "../models/favouriteModel.js";
import mongoose from "mongoose";

export const getAllFavourite = async (req, res) => {
  const user_id = req.user._id;
  const favourite = await favouriteModel.find({ user_id });
  res.status(200).json(favourite);
};

export const addProductToFavourite = async (req, res) => {
  try {
    const user_id = req.user._id;
    const newProduct = await favouriteModel.create({ ...req.body, user_id });
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

    const deleteProduct = await favouriteModel.findByIdAndDelete(objectId);

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
