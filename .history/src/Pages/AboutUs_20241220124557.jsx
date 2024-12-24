const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-100 p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about the Church of Pentecost and our journey in faith.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">History of the Church</h2>
          <p className="text-gray-700 leading-relaxed">
            The Church of Pentecost began its mission in [YEAR], spreading the
            gospel and impacting communities across the globe. Over the years,
            it has grown into a dynamic movement with a rich history of faith,
            service, and dedication to the teachings of Christ.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Milestones include [important event 1], [important event 2], and the
            establishment of [key achievement].
          </p>
        </section>

        {/* Leadership Team */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Leader 1 */}
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src="leader1.jpg"
                alt="Pastor Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-bold">Pastor John Doe</h3>
              <p className="text-sm text-gray-600">Senior Pastor</p>
              <p className="mt-2 text-gray-700">
                Pastor John has been leading the church since [YEAR], with a
                focus on [specific focus or ministry].
              </p>
            </div>

            {/* Leader 2 */}
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src="leader2.jpg"
                alt="Elder Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-bold">Elder Jane Smith</h3>
              <p className="text-sm text-gray-600">Elder</p>
              <p className="mt-2 text-gray-700">
                Elder Jane brings a wealth of experience in [specific area],
                serving the church faithfully since [YEAR].
              </p>
            </div>

            {/* Leader 3 */}
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src="leader3.jpg"
                alt="Leader Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-bold">Deacon Peter Brown</h3>
              <p className="text-sm text-gray-600">Deacon</p>
              <p className="mt-2 text-gray-700">
                Deacon Peter oversees [responsibility], ensuring smooth
                operations and member engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Core Beliefs and Doctrines */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Core Beliefs and Doctrines
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">
              We believe in the triune God: the Father, the Son, and the Holy
              Spirit.
            </li>
            <li className="mb-2">
              We uphold the Bible as the inspired and infallible Word of God.
            </li>
            <li className="mb-2">
              Salvation is through faith in Jesus Christ, by grace, and not by
              works.
            </li>
            <li className="mb-2">
              The Church is called to evangelize the world and demonstrate the
              love of Christ.
            </li>
            <li className="mb-2">
              We value prayer, worship, and fellowship as essential elements of
              the Christian life.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
