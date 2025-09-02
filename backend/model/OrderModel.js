const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: [
    {
      Name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 },
      lineTotal: { type: Number, required: true },
      image: { type: String }
    }
  ],
  address: { type: String, required: true },
  phone: { type: String, required: true },
  paymentMethod: { type: String, enum: ["COD", "ONLINE"], required: true },
  paymentProvider: { type: String, enum: ["EVC", "Zaad", "Sahal", "PayPal"] },
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Confirmed", "Delivered"], default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
