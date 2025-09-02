import React from "react";

function Contact() {
  return (
    <div className="pt-20 bg-yellow-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-600 mb-6 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you! Whether you have a question about our menu, reservations, or anything else, 
          our team is ready to answer all your questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border px-4 py-2 rounded-lg outline-none focus:border-yellow-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border px-4 py-2 rounded-lg outline-none focus:border-yellow-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border px-4 py-2 rounded-lg outline-none focus:border-yellow-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border px-4 py-2 rounded-lg outline-none focus:border-yellow-500"
              required
            ></textarea>
            <button className="bg-yellow-600 text-white py-2 rounded-lg font-bold hover:bg-yellow-700 transition">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-3">
              <span className="font-bold">📍 Address:</span> KM4, Mogadishu, Somalia
            </p>
            <p className="text-gray-600 mb-3">
              <span className="font-bold">📞 Phone:</span> +252 61 234 5678
            </p>
            <p className="text-gray-600 mb-3">
              <span className="font-bold">✉️ Email:</span> info@zararestaurant.com
            </p>

            <h2 className="text-2xl font-bold text-yellow-600 mt-6 mb-4">Opening Hours</h2>
            <p className="text-gray-600">Mon - Fri: 10:00 AM - 10:00 PM</p>
            <p className="text-gray-600">Sat - Sun: 12:00 PM - 11:00 PM</p>

            {/* Map Embed */}
            <div className="mt-6">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.2824159014836!2d45.31816131475476!3d2.046934998498583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5854e7e6e1e1f7%3A0xf3c3d3f3e2e3c8f5!2sMogadishu!5e0!3m2!1sen!2sso!4v1610000000000!5m2!1sen!2sso"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
