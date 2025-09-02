import chefImage from "../assets/IMG/chef.avif";

function About() {
    return (
        <section className=" py-20 px-6 lg:px-20 bg-yellow-50">
            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">About <span className="text-yellow-600">Zara Restaurant</span></h2>
                <p className="mt-4 text-gray-600 text-lg">
                    We serve the best delicious pizzas and meals made with fresh ingredients and love.
                </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text */}
                <div>
                    <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
                    <p className="text-gray-700 mb-4">
                        Zara Restaurant was founded with the passion to deliver delicious meals to every customer. 
                        Our chefs use only fresh ingredients and traditional recipes to create memorable dining experiences.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Join us for a cozy meal with family and friends, and enjoy our signature dishes prepared with love.
                    </p>
                    <button className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-yellow-600 transition-colors duration-300">
                        Learn More
                    </button>
                </div>

                {/* Image */}
                <div>
                    <img 
                        src={chefImage} 
                        alt="Chef" 
                        className="w-full h-auto rounded-3xl shadow-2xl object-cover hover:scale-105 transform transition-transform duration-300"
                    />
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                    <h4 className="text-xl font-bold mb-2">Quality Ingredients</h4>
                    <p className="text-gray-600">We use only fresh and high-quality ingredients for all our dishes.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                    <h4 className="text-xl font-bold mb-2">Expert Chefs</h4>
                    <p className="text-gray-600">Our chefs are experienced and passionate about creating delicious meals.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                    <h4 className="text-xl font-bold mb-2">Cozy Atmosphere</h4>
                    <p className="text-gray-600">Enjoy a warm and friendly environment perfect for family and friends.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
