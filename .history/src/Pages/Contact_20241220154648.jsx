import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10 animate-fade-in">
        Contact Us
      </h1>

      <div className="bg-gradient-to-r from-blue-100 to-white p-8 rounded-lg shadow-lg md:flex md:space-x-8">
        {/* Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 animate-fade-in">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 animate-fade-in"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="mb-4 text-gray-600">
            <span className="font-medium">Phone:</span> 0594172522
          </p>
          <p className="mb-4 text-gray-600">
            <span className="font-medium">Email:</span>{" "}
            info@golfestateassembly.com
          </p>
          <p className="mb-6 text-gray-600">
            <span className="font-medium">Office Hours:</span> Mon - Fri, 9 AM -
            5 PM
          </p>

          {/* Social Media */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-6 text-gray-500">
            <a
              href="https://web.facebook.com/people/COP-Golf-Estate-Assembly/61561098698326/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300 transform hover:scale-110"
            >
              <FacebookIcon fontSize="large" />
            </a>
            <a
              href="https://twitter.com/churchofpentecost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
            >
              <TwitterIcon fontSize="large" />
            </a>
            <a
              href="https://instagram.com/churchofpentecost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300 transform hover:scale-110"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="https://youtube.com/churchofpentecost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300 transform hover:scale-110"
            >
              <YouTubeIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 animate-fade-in">
          Our Address5.706196, -0.012934
        </h2>
        <p className="text-center text-gray-600 mb-4">Golf Estate Assembly(Cop  )</p>
        <p className="text-center text-gray-600 mb-4">
          123 Faith Avenue, Golf State, Ghana
        </p>
        <p className="text-center text-gray-600 mb-4">ZIP Code: 12345</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093337!2d144.9630579153167!3d-37.8136279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sChurch%20of%20Pentecost!5e0!3m2!1sen!2s!4v1688499486215!5m2!1sen!2s"
          width="100%"
          height="300"
          className="rounded shadow-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
