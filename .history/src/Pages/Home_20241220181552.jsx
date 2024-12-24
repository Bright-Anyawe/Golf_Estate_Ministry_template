import Footer from "../Components/Footer";

const Home = () => (
  <div>
    {/* Hero Section with Background Animation */}
    <section className="relative bg-blue-500 text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-800 opacity-50 animate-gradientBackground"></div>
      <img
        src="/Cop%20welcome%20image.png"
        alt="Cop welcome image"
        className="h-5/6 w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
        <h1 className="text-white z-10">Welcome to the Church of Pentecost</h1>
      </div>
    </section>

    <section className="presidingSection bg-slate-400 flex flex-col md:flex-row justify-center items-center p-8 py-16 text-center md:text-left">
      <div className="flex flex-shrink-0 items-center justify-center flex-col gap-4">
        <img
          src="/Golf Estate Assembly(Cop).jpg"
          alt="Presiding Image"
          className="w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <h5 className="text-3xl font-bold text-white">
          Presiding Elder: Kofi Tetteh
        </h5>
      </div>
      <div className="about md:ml-8 mt-6 md:mt-0 max-w-md text-white">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We seek to honor God who gave His best (Christ Jesus as the Savior) by
          maintaining a high standard of excellence in all our ministries and
          activities (Colossians 3:23-24).
          <br />
          <br />
          At the Church of Pentecost, we are committed to building a community
          that reflects the love of Christ. Through our worship, outreach, and
          fellowship, we aim to empower individuals to live purpose-driven lives
          that glorify God and serve others.
        </p>
      </div>
    </section>

    <section className="ministers bg-gray-100 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Ministers
      </h2>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1 px-8">
        <div className="ministerCard bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            src="/Golf Estate Assembly(Cop).jpg"
            alt="Minister Image"
            className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 mb-6"
          />
          <h5 className="text-xl font-semibold text-gray-800">
            <span className="block text-gray-600">Youth Leader</span>
            Daniel Aggrey
          </h5>
        </div>
        <div className="ministerCard bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            src="/Golf Estate Assembly(Cop).jpg"
            alt="Minister Image"
            className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 mb-6"
          />
          <h5 className="text-xl font-semibold text-gray-800">
            <span className="block text-gray-600">Choir Leader</span>
            Jane Doe
          </h5>
        </div>
        <div className="ministerCard bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            src="/Golf Estate Assembly(Cop).jpg"
            alt="Minister Image"
            className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 mb-6"
          />
          <h5 className="text-xl font-semibold text-gray-800">
            <span className="block text-gray-600">Evangelist</span>
            John Smith
          </h5>
        </div>
      </div>
    </section>

    <section className="container flex flex-col justify-center items-center p-8 py-16 text-center md:text-left">
      <h2 className="text-2xl font-bold mb-4 text-#377dff">Upcoming Events</h2>
      <div className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        <button className="text-white font-semibold">Learn More</button>
      </div>
    </section>

    <section className="container flex flex-col justify-center items-center p-8 py-16 text-center md:text-left">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Latest Sermons</h2>
      <div className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        <button className="text-white font-semibold">Learn More</button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
