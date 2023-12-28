import { requireSignIn } from "../middlewares/authMiddleware.js";
import express from "express";
import {
  addProductToFavourite,
  getAllFavourite,
  deleteProduct,
} from "../controllers/favouriteController.js";

const router = express.Router();

router.use(requireSignIn);

router.get("/", getAllFavourite);

router.post("/", addProductToFavourite);

router.delete("/:id", deleteProduct);

export default router;
