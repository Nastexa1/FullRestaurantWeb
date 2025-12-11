import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  // ✅ Use environment variable or fallback
  const BASE_URL =
    import.meta.env.VITE_API_URL || "https://fullrestaurantweb.onrender.com";

  // Fetch all orders
  const getOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getOrder`);
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      alert("Failed to fetch orders");
    }
  };

  // Delete order
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/removeOrder/${id}`);
      setOrders((prev) => prev.filter((order) => order._id !== id));
    } catch (err) {
      console.error("Error deleting order:", err);
      alert("Failed to delete order");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5 ml-[230px] mt-5 w-full">
        <h1 className="text-3xl font-bold mb-6 mt-9 ml-5">All Orders</h1>

        {orders.length === 0 ? (
          <p className="ml-5 font-bold text-gray-500">No orders found</p>
        ) : (
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
                    <div key={i} className="flex justify-between border-b py-1">
                      <span>
                        {item.Name} x {item.quantity || 1}
                      </span>
                      <span>${item.price * (item.quantity || 1)}</span>
                    </div>
                  ))}
                </div>

                <p className="font-bold mt-3 text-lg">
                  Total: ${ordersTotal(order.items)}
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
        )}
      </div>
    </div>
  );
}

// Helper function to calculate total
const ordersTotal = (items) => {
  return items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
};

export default OrdersTable;
