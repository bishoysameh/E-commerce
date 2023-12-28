import JWT from "jsonwebtoken";
import users from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Token is missing" });
    }

    const secretKey = "ninjadojoshifuyishimrioluigipeachbowser";

    //  decoded token
    const decoded = JWT.decode(token.replace("Bearer ", ""));
    console.log("Decoded Token:", decoded);

    const verified = JWT.verify(token.replace("Bearer ", ""), secretKey);
    req.user = await users.findOne({ _id: verified._id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ error: "Request is not authorized", details: error.message });
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
