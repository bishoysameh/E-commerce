import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://boba:3wl7XRISLgkCBUu0@cluster1.1mj9b95.mongodb.net/ecommerce"
      // "mongodb://127.0.0.1:27017/ecommerce"
    );
    console.log(
      "database connection ESTABLISHED SUCCESSFULLY!".bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
