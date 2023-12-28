import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import mobileModel from "./models/mobileModel.js";
import favouriteModel from "./models/favouriteModel.js";
import cartRoutes from "./routes/cartRoute.js";
import productModel from "./models/productModel.js";
import favouriteRoutes from "./routes/favouriteRoute.js";
import profileRoutes from "./routes/profileRoute.js";
import Cors from "cors";

dotenv.config();
connectDB();
// mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(Cors());
app.options("*", Cors());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/favourite", favouriteRoutes);
app.use("/api/profile", profileRoutes);
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running  on port ${PORT}`.bgCyan.white);
});

app.get("/products", async function (req, res) {
  try {
    const getAllProducts = await productModel.find({
      id: { $gte: 1, $lte: 9 },
    });
    if (getAllProducts && getAllProducts.length > 0) {
      res.send(getAllProducts);
    } else {
      res.json({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/products/:productId", async function (req, res) {
  const productId = req.params.productId;

  try {
    const getSingleProduct = await productModel.findOne({ _id: productId });

    if (getSingleProduct) {
      res.send(getSingleProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/productsAdd", async function (req, res) {
  const {
    productType,
    productName,
    productPrice,
    productDetails,
    productPhoto,
  } = req.body;

  try {
    const productAdded = await productModel.create({
      productType,
      productName,
      productPrice,
      productDetails,
      productPhoto,
    });

    res.status(201).send({
      success: true,
      message: "Product added successfully",
      productAdded,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Failed to add product" });
  }
});

app.delete("/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await productModel.findByIdAndDelete(productId);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put("/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.error("Error updating product", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
