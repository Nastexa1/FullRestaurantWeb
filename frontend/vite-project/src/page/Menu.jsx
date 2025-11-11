import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartSlice";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("food");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // ✅ Fetch products from backend (Render)
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("https://fullrestaurantweb.onrender.com/getmenu")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error fetching products:", err));
  };

  const categories = ["food", "drink", "coffee", "tea", "desserts"];
  const filteredItems = products.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="bg-yellow-50 pt-20 p-3 md:flex md:gap-5">
      {/* Left side */}
      <div className="flex flex-col gap-5 md:w-72">
        {/* Categories */}
        <div>
          <h1 className="text-yellow-600 text-2xl font-bold border-b-2 border-gray-300">
            Categories
          </h1>
          <div className="bg-white mt-2 rounded shadow p-5 h-auto md:h-52">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 rounded font-bold mb-2 w-full text-left hover:text-yellow-400 
                  ${selectedCategory === cat ? "text-yellow-500" : ""}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* New Products */}
        <div>
          <h1 className="text-yellow-600 text-2xl font-bold border-b-2 border-gray-300">
            New Products
          </h1>
          <div className="bg-white shadow mt-2 h-96 overflow-y-auto">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center border-b p-3"
              >
                <img
                  className="w-16 h-16 object-cover rounded"
                  src={item.image}
                  alt={item.Name}
                />
                <div className="ml-3 flex-1">
                  <h1 className="font-bold text-lg">{item.Name}</h1>
                  <p className="font-bold text-red-500">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 mt-5 md:mt-0">
        <h1 className="text-yellow-600 text-2xl font-bold border-b-2 border-gray-300 mb-4">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded shadow p-5 flex flex-col"
            >
              <img
                className="rounded w-full h-40 object-cover"
                src={item.image}
                alt={item.Name}
              />
              <h1 className="mt-2 font-bold text-yellow-500">{item.Name}</h1>
              <h1 className="text-red-600 font-bold">${item.price}</h1>
              <button
                className="bg-yellow-600 text-white font-bold px-4 mt-2 py-2 rounded w-full hover:bg-yellow-500"
                onClick={() => dispatch(addToCart(item))}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
