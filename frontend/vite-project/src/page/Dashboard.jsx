import {  FaCheckCircle, FaShoppingCart, FaTimesCircle, FaUserCheck } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      < Sidebar/>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 bg-yellow-50 min-h-screen">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 mt-18">Welcome, Admin</h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow p-5 rounded-lg flex items-center gap-3">
            <FaShoppingCart className="text-yellow-600 text-3xl" />
            <div>
              <h2 className="font-bold text-gray-700">Total Orders</h2>
              <p className="text-gray-500 text-xl">120</p>
            </div>
          </div>

          <div className="bg-white shadow p-5 rounded-lg flex items-center gap-3">
            <FaCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h2 className="font-bold text-gray-700">Completed</h2>
              <p className="text-gray-500 text-xl">95</p>
            </div>
          </div>

          <div className="bg-white shadow p-5 rounded-lg flex items-center gap-3">
            <FaTimesCircle className="text-red-500 text-3xl" />
            <div>
              <h2 className="font-bold text-gray-700">Cancelled</h2>
              <p className="text-gray-500 text-xl">5</p>
            </div>
          </div>

          <div className="bg-white shadow p-5 rounded-lg flex items-center gap-3">
            <FaUserCheck className="text-blue-500 text-3xl" />
            <div>
              <h2 className="font-bold text-gray-700">New Users</h2>
              <p className="text-gray-500 text-xl">20</p>
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
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4">#1021</td>
                <td className="px-6 py-4">Ahmed</td>
                <td className="px-6 py-4">Pizza, Coke</td>
                <td className="px-6 py-4">$25.5</td>
                <td className="px-6 py-4 text-green-500 font-bold">Completed</td>
              </tr>
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4">#1022</td>
                <td className="px-6 py-4">Fatima</td>
                <td className="px-6 py-4">Burger</td>
                <td className="px-6 py-4">$15.0</td>
                <td className="px-6 py-4 text-yellow-500 font-bold">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
