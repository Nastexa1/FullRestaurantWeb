import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function AddProductForm() {
  const [formData, setFormData] = useState({
    Name: "",
    price: "",
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Isticmaal environment variable Netlify
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await axios.post(`${API_URL}/createmenu`, formData);
      alert("Product added successfully!");
      setFormData({ Name: "", price: "", category: "", image: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-grow flex justify-center items-start pt-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-[800px] max-w-md"
        >
          <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
            Add New Product
          </h2>

          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-yellow-400"
            required
          />

          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-yellow-400"
            required
          />

          <label className="block mb-2 font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-yellow-400"
            required
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
            <option value="coffee">Coffee</option>
            <option value="tea">Tea</option>
            <option value="desserts">Desserts</option>
          </select>

          <label className="block mb-2 font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-6 focus:outline-yellow-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-bold py-2 rounded hover:bg-yellow-500 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
