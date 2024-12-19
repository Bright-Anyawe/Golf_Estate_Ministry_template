const Choir = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center my-4">Choir Ministry</h1>
      <section className="my-6">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>
          The Choir Ministry plays a vital role in enhancing the worship
          experience through music and song. We believe that music is a powerful
          tool for glorifying God and spreading His Word.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-xl font-semibold">Mission and Vision</h2>
        <p>
          Our mission is to lead the congregation into heartfelt worship and
          bring glory to God through our talents. Our vision is to grow
          spiritually and musically, impacting lives through inspiring
          performances.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-xl font-semibold">General Choir</h2>
        <ul className="list-disc ml-6">
          <li>Youth Choir</li>
          <li>Adult Choir</li>
          <li>Children's Choir</li>
        </ul>
      </section>

      <section className="my-6">
        <h2 className="text-xl font-semibold">Practice Schedule</h2>
        <p>Practice sessions are held every:</p>
        <ul className="list-disc ml-6">
          <li>Tuesday and Thursday: 6:00 PM - 8:00 PM</li>
          <li>Saturday: 4:00 PM - 6:00 PM</li>
        </ul>
      </section>

      <section className="my-6">
        <h2 className="text-xl font-semibold">Get Involved</h2>
        <p>
          Interested in joining the choir? Reach out to the Choir Director after
          service or fill out the registration form on the{" "}
          <Link to="/events">Events page</Link>.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-xl font-semibold">Upcoming Performances</h2>
        <p>
          Stay tuned for our performances during special church events and
          services.
        </p>
      </section>
    </div>
  );
};

export default Choir;
