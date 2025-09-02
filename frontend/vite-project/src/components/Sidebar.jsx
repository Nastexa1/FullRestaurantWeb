import { FaTachometerAlt, FaShoppingCart, FaUtensils, FaUsers, FaMoneyBillWave } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-200 flex flex-col shadow-lg fixed">
      {/* Logo Section */}
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-2xl font-extrabold tracking-wide text-yellow-400">
          Zara<span className="text-white">Admin</span>
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-4">
        <a
          href="/dashboard"
          className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
        >
          <FaTachometerAlt /> <span className="font-semibold">Dashboard</span>
        </a>
        <a
          href="ordersTable"
          className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
        >
          <FaShoppingCart /> <span className="font-semibold">Orders</span>
        </a>
        <a
          href="/products"
          className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
        >
          <FaUtensils /> <span className="font-semibold">Products</span>
        </a>
        <a
          href="/admin/users"
          className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
        >
          <FaUsers /> <span className="font-semibold">Users</span>
        </a>
        <a
          href="/admin/payments"
          className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
        >
          <FaMoneyBillWave /> <span className="font-semibold">Payments</span>
        </a>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-center text-xs text-gray-400">
        <p>&copy; 2025 ZaraRestaurant Admin</p>
      </div>
    </div>
  );
}

export default Sidebar;
