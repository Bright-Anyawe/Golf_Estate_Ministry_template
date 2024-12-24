



const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <div className="bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
        <form>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Address</h2>
          <p>Church of Pentecost</p>
          <p>123 Faith Avenue, Golf State, Ghana</p>
          <p>ZIP Code: 12345</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093337!2d144.9630579153167!3d-37.8136279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sChurch%20of%20Pentecost!5e0!3m2!1sen!2s!4v1688499486215!5m2!1sen!2s"
            width="100%"
            height="250"
            className="rounded"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p>
            <span className="font-semibold">Phone:</span> +1 123-456-7890
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            info@churchofpentecost.com
          </p>
          <p>
            <span className="font-semibold">Office Hours:</span> Mon - Fri, 9 AM
            - 5 PM
          </p>

          {/* Social Media Links */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/churchofpentecost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/churchofpentecost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/churchofpentecost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/churchofpentecost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact