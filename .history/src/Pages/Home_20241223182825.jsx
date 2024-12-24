import { useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import Footer from "../Components/Footer";

const Home = () => {
  const { events, sermons, bibleStudies } = useContext(GeneralContext);

  const upcomingEvent = events[0];

  const latestSermon = sermons.reduce((latest, sermon) => {
    return new Date(sermon.date) > new Date(latest.date) ? sermon : latest;
  }, sermons[0]);

  // Get the latest bible study (based on week)
  const latestBibleStudy = bibleStudies.reduce((latest, study) => {
    return study.week > latest.week ? study : latest;
  }, bibleStudies[0]);

  return (
    <div>
      <section className="bg-blue-500 text-white text-center ">
        <img
          src="/Cop%20welcome%20image.png"
          alt="Cop welcome image"
          className="h-5/6 relative"
        />
      </section>

      <section className="presidingSection bg-slate-400 flex flex-col md:flex-row justify-center items-center gap-24 p-4  py-16 text-center md:text-left">
        <div className="flex flex-shrink-0 items-center justify-center flex-col gap-8">
          <img
            src="/Golf Estate Assembly(Cop).jpg"
            alt="Presiding Image"
            className="w-96 h-96 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <h5 className="text-3xl font-bold">Presiding Elder: Kofi Tetteh</h5>
        </div>
        <div className="about md:ml-8 mt-6 md:mt-0 max-w-md">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-2xl">
            We seek to honor God who gave His best (Christ Jesus as the Savior)
            by maintaining a high standard of excellence in all our ministries
            and activities (Colossians 3:23-24). <br />
            <br />
            At the Church of Pentecost, we are committed to building a community
            that reflects the love of Christ. Through our worship, outreach, and
            fellowship, we aim to empower individuals to live purpose-driven
            lives that glorify God and serve others.
          </p>
        </div>
      </section>

      <section className="upcomingEvent container flex flex-col justify-center items-center gap-10 bg-gray-300  p-8 py-16 text-center md:text-left">
        <h2 className="text-5xl font-bold mb-4 text-#377dff text-indigo-700">
          Upcoming Events
        </h2>
        {upcomingEvent ? (
          <div className="eventCard bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center text-2xl">
            <h3 className=" font-bold text-gray-800">{upcomingEvent.title}</h3>
            <p className="text-gray-600 ">{upcomingEvent.date}</p>
            <p className="text-gray-600">{upcomingEvent.description}</p>
            <button className="bg-blue-600 p-3 border-spacing-1 rounded-lg mt-4">
              Learn more
            </button>
          </div>
        ) : (
          <p>No upcoming events at the moment.</p>
        )}
      </section>

      <section className="latestSermon container flex flex-col  justify-center items-center gap-10 bg-[url('/public/sundayService.png')] bg-no-repeat bg-cover bg-center bg-opacity-50 p-8 py-16 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 text-#377dff">
          Current Teachings of the Word.
        </h2>

        <div className=" teachingContainer flex flex-row  justify-center items-center gap-20">
          <div className=" flex flex-col justify-center items-center gap-5">
            <h2 className="text-3xl font-bold mb-4 text-#377dff">
              Latest Sermon
            </h2>

            <div>
              <h3 className="text-3xl font-semibold">{latestSermon.title}</h3>
              <p className="text-xl">{latestSermon.description}</p>
              <p className="font-bold text-xl">
                Speaker: {latestSermon.speaker}
              </p>
              <p className="text-xl">
                Date: {new Date(latestSermon.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center gap-5 ">
            <h2 className="text-3xl font-bold mb-4 text-#377dff">
              Upcoming Bible Study
            </h2>
            <div>
              <h3 className="text-3xl font-semibold">
                {latestBibleStudy.topic}
              </h3>
              <p className="text-xl">{latestBibleStudy.description}</p>
              <p className="font-bold text-xl">
                Memory Verse: {latestBibleStudy.memoryVerse}
              </p>
              <p className="text-xl">Main Text: {latestBibleStudy.mainText}</p>
            </div>
          </div>
        </div>

        <button
          className="WordBtn bg-blue-600 text-c p-3 border-spacing-1 rounded-lg text-xl"
          onClick={() => (window.location.href = latestBibleStudy.link)}
        >
          Learn more
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
