import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  // Fetch orders from backend
  const getOrders = () => {
    axios
      .get("http://localhost:3000/getOrder")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrders();
  }, []);

  // Delete order
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/removeOrder/${id}`)
      .then(() => {
        setOrders(orders.filter((order) => order._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5 ml-[230px] mt-5 w-full">
        <h1 className="text-3xl font-bold mb-6 mt-9 ml-5">All Orders</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-5">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Order #{index + 1}</h2>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>

              <p className="font-semibold">
                Address: <span className="font-normal">{order.address}</span>
              </p>
              <p className="font-semibold">
                Phone: <span className="font-normal">{order.phone}</span>
              </p>

              <div className="mt-3">
                <h3 className="font-semibold mb-1">Items:</h3>
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b py-1"
                  >
                    <span>
                      {item.Name} x {item.quantity}
                    </span>
                    <span>${item.lineTotal}</span>
                  </div>
                ))}
              </div>

              <p className="font-bold mt-3 text-lg">
                Total: ${order.totalAmount}
              </p>

              <p
                className={`mt-2 font-semibold ${
                  order.status === "Pending"
                    ? "text-yellow-600"
                    : order.status === "Confirmed"
                    ? "text-green-600"
                    : order.status === "Delivered"
                    ? "text-blue-600"
                    : "text-red-600"
                }`}
              >
                Status: {order.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
