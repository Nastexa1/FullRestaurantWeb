import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/reducer/cartSlice";
import { useState } from "react";
import axios from "axios";

function Cart() {
  const cart = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [paymentProvider, setPaymentProvider] = useState("EVC");

  const handleConfirmOrder = async () => {
    if (!address || !phone) return alert("Please enter address and phone");

    try {
      // Isticmaal environment variable Netlify
      const API_URL = import.meta.env.VITE_API_URL;

      await axios.post(`${API_URL}/createOrder`, {
        items: cart,
        address,
        phone,
        paymentMethod,
        paymentProvider,
      });

      alert("Order created successfully!");
      // Optional: reset cart or form
      setAddress("");
      setPhone("");
      setPaymentMethod("COD");
      setPaymentProvider("EVC");
      // Optional: dispatch clear cart if you have it
      // dispatch(clearCart());
    } catch (err) {
      console.error(err);
      alert("Error creating order");
    }
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="flex flex-col md:flex-row justify-between p-10 gap-10 bg-yellow-50 min-h-screen">
      {/* Cart Items */}
      <div className="flex-grow">
        <h1 className="text-yellow-600 font-bold text-2xl border-b-2 mt-20 border-b-gray-300 w-[300px]">
          CartPage
        </h1>
        {cart.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md w-full md:w-[600px] flex flex-col md:flex-row mt-3 p-3 rounded-lg"
          >
            <img
              className="w-full md:w-[200px] rounded-lg"
              src={item.image}
              alt={item.Name}
            />
            <div className="md:ml-5 mt-3 md:mt-0">
              <h1 className="text-2xl">{item.Name}</h1>
              <p className="text-red-500 font-bold">${item.price}</p>
              <p className="font-bold">Quantity: {item.quantity || 1}</p>
              <p className="font-bold">
                Line Total: ${item.price * (item.quantity || 1)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item._id))}
                className="text-white font-bold mt-3 bg-red-600 px-6 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-white border w-full md:w-[350px] h-auto p-5 rounded-lg shadow-md mt-10 md:mt-20">
        <h1 className="text-2xl font-bold border-b-2 pb-2 border-gray-200">
          Total Items
        </h1>
        <p className="font-extrabold text-lg mt-2">{cart.length}</p>
        <p className="font-bold text-red-600 mt-1">Total: ${totalAmount}</p>

        <div className="mt-5 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border px-3 py-2 rounded-lg outline-none"
          />
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border px-3 py-2 rounded-lg outline-none"
          />

          <label className="font-bold">Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border px-3 py-2 rounded-lg outline-none"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="ONLINE">Online Payment</option>
          </select>

          <select
            value={paymentProvider}
            onChange={(e) => setPaymentProvider(e.target.value)}
            className="border px-3 py-2 rounded-lg outline-none"
          >
            <option value="EVC">EVC</option>
            <option value="Zaad">Zaad</option>
            <option value="Sahal">Sahal</option>
            <option value="PayPal">PayPal</option>
          </select>

          <button
            onClick={handleConfirmOrder}
            className="bg-yellow-600 text-white font-bold py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
