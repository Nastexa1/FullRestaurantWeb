import React from "react";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Italian Cooking",
      date: "August 20, 2025",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      excerpt: "Discover the secrets behind traditional Italian cuisine and how to make the perfect pasta at home.",
    },
    {
      id: 2,
      title: "5 Refreshing Summer Drinks",
      date: "August 18, 2025",
      image: "https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&w=800&q=80",
      excerpt: "Cool off with these 5 easy and delicious summer drinks that everyone will love.",
    },
    {
      id: 3,
      title: "Healthy Salads for Busy Days",
      date: "August 15, 2025",
      image: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D",
      excerpt: "Learn how to prepare quick and healthy salads that are perfect for lunch or dinner.",
    },
  ];

  return (
    <div className="pt-20 bg-yellow-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-600 mb-8 text-center">Zara Restaurant Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-bold text-yellow-600 mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
                <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
