const Home = () => (
  <div>
    <section className="bg-blue-500 text-white text-center ">
      <img
        src="/Cop%20welcome%20image.png"
        alt="Cop welcome image"
        className="h-5/6 relative"
      />
      <h1 className="text-4xl font-bold">Presiding Elder: Kofi Tetteh</h1>
      
    </section>

    <section className="presidingSection bg-slate-400 flex flex-col md:flex-row justify-center items-center p-8  py-16 text-center md:text-left">
      <div className="flex-shrink-0">
        <img
          src="public/Golf Estate Assembly(Cop).jpg"
          alt="Presiding Image"
          className="w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <div className="about md:ml-8 mt-6 md:mt-0 max-w-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We seek to honor God who gave His best (Christ Jesus as the Savior) by
          maintaining a high standard of excellence in all our ministries and
          activities (Colossians 3:23-24). <br />
          <br />
          At the Church of Pentecost, we are committed to building a community
          that reflects the love of Christ. Through our worship, outreach, and
          fellowship, we aim to empower individuals to live purpose-driven lives
          that glorify God and serve others.
        </p>
      </div>
    </section>

    <section className="ministers">
      <div className="ministerCard"></div>
      <div className="ministerCard"></div>
      <div className="ministerCard"></div>
    </section>

    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      {/* Map over events */}
    </section>
    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Latest Sermons</h2>
      {/* Map over sermons */}
    </section>
  </div>
);

export default Home;
