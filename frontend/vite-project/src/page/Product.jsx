import Sidebar from "../components/Sidebar"
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get("http://localhost:3000/getmenu").then((res) => {
      setProducts(res.data);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/removeproduct/${id}`)
      .then((res) => {
        alert(res.data);
        getProducts(); // refresh products list
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();  // ✅ only fetch products
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="bg-yellow-50 w-full min-h-screen p-5">
        {/* Header */}
        <div className="flex justify-between items-center mt-16 mb-5 px-10">
          <h1 className="text-black font-bold text-2xl ml-[200px]">
            Products in My Restaurant
          </h1>
          <NavLink to="/AddProductForm">
            <button className="bg-black text-white font-bold px-6 py-2 rounded shadow hover:bg-gray-800 transition">
            Add Product
          </button>
            </NavLink>
        </div>

        {/* Products grid */}
        <div className="ml-[250px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col"
            >
              <img
                className="rounded-md w-full h-40 object-cover"
                src={item.image}
                alt={item.Name}
              />
              <h1 className="text-yellow-700 font-bold text-xl mt-2">
                {item.Name}
              </h1>
              <p className="text-red-500 font-extrabold">{item.price}</p>
              <p className="font-extrabold text-yellow-700">{item.category}</p>
              <div className="flex gap-3 mt-3">
                <button 
                  onClick={() => handleDelete(item._id)} 
                  className="bg-red-600 text-white font-bold rounded px-4 py-2">
                  Delete
                </button>

                <button className="bg-yellow-600 text-white font-bold rounded px-4 py-2 hover:bg-yellow-700 transition">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
