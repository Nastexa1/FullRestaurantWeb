import { useEffect, useState } from "react";
import { FaCheckCircle, FaShoppingCart, FaTimesCircle, FaUserCheck } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [usersCount, setUsersCount] = useState(0);

  const BASE_URL = import.meta.env.VITE_API_URL || "https://fullrestaurantweb.onrender.com";

  // Fetch orders from backend
  const getOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getOrder`);
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  // Fetch total users count
  const getUsersCount = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getUsersCount`); // Make this API in backend
      setUsersCount(res.data.count);
    } catch (err) {
      console.error("Error fetching users count:", err);
    }
  };

  useEffect(() => {
    getOrders();
    getUsersCount();
  }, []);

  // Calculate dashboard stats
  const totalOrders = orders.length;
  const completedOrders = orders.filter((o) => o.status === "Completed").length;
  const cancelledOrders = orders.filter((o) => o.status === "Cancelled").length;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6 bg-yellow-50 min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 mt-18">Welcome, Admin</h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow p-5 rounded-lg flex items-center gap-3">
            <FaShoppingCart className="text-yellow-600 text-3xl" />
            <div>
              <h2 className="font-bold text-gray-700">Total Orders</h2>
              <p className="text-gray-500 text-xl">{totalOrders}</p>
            </div>
          </div>

          <div className="bg-white shadow p-5 rounded-lg flex items-center gap-3">
            <FaCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h2 className="font-bold text-gray-700">Completed</h2>
              <p className="text-gray-500 text-xl">{completedOrders}</p>
            </div>
          </div>

          <div className="bg-white shadow p-5 rounded-lg flex items-center gap-3">
            <FaTimesCircle className="text-red-500 text-3xl" />
            <div>
              <h2 className="font-bold text-gray-700">Cancelled</h2>
              <p className="text-gray-500 text-xl">{cancelledOrders}</p>
            </div>
          </div>

          <div className="bg-white shadow p-5 rounded-lg flex items-center gap-3">
            <FaUserCheck className="text-blue-500 text-3xl" />
            <div>
              <h2 className="font-bold text-gray-700">New Users</h2>
              <p className="text-gray-500 text-xl">{usersCount}</p>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="mt-10 bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-yellow-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-yellow-50">
                  <td className="px-6 py-4">#{order._id.slice(-4)}</td>
                  <td className="px-6 py-4">{order.customerName || "Guest"}</td>
                  <td className="px-6 py-4">
                    {order.items.map((i) => i.Name).join(", ")}
                  </td>
                  <td className="px-6 py-4">
                    ${order.items.reduce((acc, i) => acc + i.price * (i.quantity || 1), 0)}
                  </td>
                  <td
                    className={`px-6 py-4 font-bold ${
                      order.status === "Completed"
                        ? "text-green-500"
                        : order.status === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
