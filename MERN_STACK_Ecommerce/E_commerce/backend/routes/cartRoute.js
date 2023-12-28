import { requireSignIn } from "../middlewares/authMiddleware.js";
import express from "express";
import {
  addProductToCart,
  getAllCart,
  deleteProduct,
} from "../controllers/cartController.js";

const router = express.Router();

router.use(requireSignIn);

router.get("/", getAllCart);

router.post("/", addProductToCart);

router.delete("/:id", deleteProduct);

export default router;
