const Home = () => (
  <div>
    <section className="bg-blue-500 text-white text-center ">
      <img
        src="/Cop%20welcome%20image.png"
        alt="Cop welcome image"
        className="h-5/6 relative"
      />

      {/* <h1 className="text-4xl font-bold">Welcome to the Church of Pentecost</h1>
      <p className="mt-2">Experience God&apos;s love and grace with us.</p> */}
    </section>

    <section className=" bg-slate-400 flex justify-center align-middle p-8 h-screen">
      <div className="h-72">
        <img src="" alt="Presiding20%Image" className="h-1/3" />
      </div>
      <div className="h-72">
        We seek to honour God who gave His best (Christ Jesus as the Saviour) by
        maintaining a high standard of excellence in all our ministries and
        activities (Colossians 3:23-24).
      </div>
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
