import React from "react";
import pizz55 from "../assets/IMG/pizza96.jpg";
import About from "./About";
import Menu from "./Menu";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-20 bg-yellow-50 pt-36">
        {/* Left side */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-800">
            Good Food  For <span className="text-yellow-600">Good Health</span>
          </h1>
          <p className="text-gray-600 text-lg">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-bold hover:bg-yellow-700 transition">
              Order Now
            </button>
            <button className="px-6 py-3 border-2 border-yellow-600 text-yellow-600 rounded-lg font-bold hover:bg-yellow-50 transition">
              Book Now
            </button>
          </div>

          {/* Info cards */}
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg shadow">
              <span className="text-yellow-500 text-2xl">🚚</span>
              <div className="sm:p-0 px-1 py-2">
                <h3 className="font-bold text-gray-700">Fast Delivery</h3>
                <p className="text-gray-500 text-sm">Delivery within 30 minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg shadow">
              <span className="text-yellow-500 text-2xl">🍴</span>
              <div>
                <h3 className="font-bold text-gray-700">Dine In</h3>
                <p className="text-gray-500 text-sm">Enjoy your food fresh & hot</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 mt-17 lg:mt-0 flex justify-center sm-mt-0 ">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Delicious Pizza"
            className="-mt-10 rounded"
          />
        </div>
      </div>

      {/* Other sections */}
      <About />
      <Menu />
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
