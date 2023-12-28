import { requireSignIn } from "../middlewares/authMiddleware.js";

import express from "express";
import {
  getProfileController,
  updateProfileController,
} from "../controllers/profileController.js";

const router = express.Router();
// de function bte3ml decode ll user token to id
router.use(requireSignIn);

router.get("/", getProfileController);
router.put("/", updateProfileController);

export default router;
