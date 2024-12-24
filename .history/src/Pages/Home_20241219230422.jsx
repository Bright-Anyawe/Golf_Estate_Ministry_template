


const Home = () => (
  <div>
    <section className="bg-blue-500 text-white text-center p-8 bg-[url('/img/hero-pattern.svg')]">
      <h1 className="text-4xl font-bold h-56">
        Welcome to the Church of Pentecost
      </h1>
      <p className="mt-2">Experience God&apos;s love and grace with us.</p>
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
