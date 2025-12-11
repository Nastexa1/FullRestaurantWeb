const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config(); // .env support

app.use(cors({
  origin: ["https://fullrestaurant.netlify.app", "http://localhost:5173"]
}));
app.use(express.json());

// MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((error) => console.log(error));

// Models
const menu = require("./model/menu");
const OrderModel = require("./model/OrderModel");

// Routes
app.post("/createmenu", async (req, res) => {
  try {
    const newData = new menu(req.body);
    await newData.save();
    res.send("Menu has been saved successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating menu");
  }
});

app.get("/getmenu", async (req, res) => {
  try {
    const getmenu = await menu.find();
    res.send(getmenu);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching menu");
  }
});

app.delete("/removeproduct/:id", async (req, res) => {
  try {
    const deleted = await menu.findByIdAndDelete(req.params.id);
    res.send("Product deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting product");
  }
});

// Orders
app.post("/createOrder", async (req, res) => {
  try {
    const { items, address, phone, paymentMethod, paymentProvider } = req.body;
    const itemsWithTotals = items.map(i => ({
      ...i,
      quantity: i.quantity || 1,
      lineTotal: i.price * (i.quantity || 1),
    }));
    const totalAmount = itemsWithTotals.reduce((acc, i) => acc + i.lineTotal, 0);

    const newOrder = new OrderModel({
      items: itemsWithTotals,
      address,
      phone,
      paymentMethod,
      paymentProvider,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving order" });
  }
});

app.get("/getOrder", async (req, res) => {
  try {
    const getOrder = await OrderModel.find();
    res.send(getOrder);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching orders");
  }
});

app.delete("/removeOrder/:id", async (req, res) => {
  try {
    const removedOrder = await OrderModel.findByIdAndDelete(req.params.id);
    if (!removedOrder) return res.status(404).json({ success: false, message: "Order not found" });
    res.status(200).json({ success: true, message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
