import { useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart.item); // Redux cart items
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed w-full bg-yellow-600 z-50 shadow-md">
      <div className="flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-white">
          Zara <span className="text-black">Restaurant</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 font-bold text-white items-center">
          <NavLink to="/"><li className="hover:text-yellow-300 transition cursor-pointer">Home</li></NavLink>
          <NavLink to="/about"><li className="hover:text-yellow-300 transition cursor-pointer">About</li></NavLink>
          <NavLink to="/menu"><li className="hover:text-yellow-300 transition cursor-pointer">Food</li></NavLink>
          <NavLink to="blog">
            <li className="hover:text-yellow-300 transition cursor-pointer">Blog</li>
            </NavLink>
          <NavLink to="contact">
            <li className="hover:text-yellow-300 transition cursor-pointer">Conatct</li>
            </NavLink>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="bg-white rounded font-bold px-6 py-2 hover:bg-yellow-300 transition">
            Order Now
          </button>
          <div className="relative cursor-pointer">
            <NavLink to="/cart">
              <FaShoppingCart className="text-white text-2xl hover:text-yellow-300 transition" />
            </NavLink>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="sm:hidden flex items-center gap-4">
          <div className="relative cursor-pointer">
            <NavLink to="/cart">
              <FaShoppingCart className="text-white text-2xl hover:text-yellow-300 transition" />
            </NavLink>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <div className="text-white text-2xl cursor-pointer" onClick={handleToggle}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`sm:hidden bg-yellow-600 fixed top-16 left-0 w-full h-screen px-6 py-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}><li className="text-white font-bold text-lg hover:text-yellow-300">Home</li></NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}><li className="text-white font-bold text-lg hover:text-yellow-300">About</li></NavLink>
        <NavLink to="/menu" onClick={() => setOpen(false)}><li className="text-white font-bold text-lg hover:text-yellow-300">Food</li></NavLink>
        <li className="text-white font-bold text-lg hover:text-yellow-300">Blog</li>
        <li className="text-white font-bold text-lg hover:text-yellow-300">Contact</li>

        <button className="bg-white text-yellow-600 font-bold px-6 py-2 rounded hover:bg-yellow-300 w-full mt-4">
          Order Now
        </button>
      </ul>
    </div>
  );
}

export default Header;
