import userModel from "../models/userModel.js";

export const getProfileController = async (req, res) => {
  try {
    const user_id = req.user._id;

    const user = await userModel.findById(user_id);

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in retrieving profile",
      error: error.message,
    });
  }
};

export const updateProfileController = async (req, res) => {
  const user_id = req.user._id;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(user_id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error("Error updating user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
