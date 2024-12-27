import { useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import Footer from "../Components/Footer";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useState } from "react";
import { Typography } from "@mui/material";

const Home = () => {
  const { events, sermons, bibleStudies } = useContext(GeneralContext);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.body.classList.toggle("dark", isDark);
    console.log(document.body.className);
  };

  const upcomingEvent = events[0];

  const latestSermon = sermons.reduce((latest, sermon) => {
    return new Date(sermon.date) > new Date(latest.date) ? sermon : latest;
  }, sermons[0]);

  const latestBibleStudy = bibleStudies.reduce((latest, study) => {
    return study.week > latest.week ? study : latest;
  }, bibleStudies[0]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="bg-slate-200 dark:bg-slate-900 text-white text-center overflow-hidden">
        {/* <div className="darkMode flex items-end flex-col justify-around">
          <IconButton
            onClick={handleDarkModeToggle}
            className="transition-all duration-300 transform hover:scale-110 relative top-0 right-20"
            style={{ color: darkMode ? "#fff" : "#000" }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </div> */}

        <div className="w-full h-full max-w-full max-h-full relative overflow-hidden  px-3 sm:px-5 md:px-10 lg:px-10 py-3 sm:py-5 md:pt-3 lg:py-5">
          <img
            src="/Cop%20welcome%20image.png"
            alt="Cop welcome image"
            className="w-full h-full rounded-3xl object-cover sm:h-10"
          />
        </div>
      </section>

      <section className="presidingSection bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white flex flex-col md:flex-row justify-center items-center gap-16 p-8 py-20">
        {/* Image and Title */}
        <div className="flex flex-shrink-0 items-center justify-center flex-col gap-8 text-center md:text-left">
          <img
            src="/Golf Estate Assembly(Cop).jpg"
            alt="Presiding Image"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-8 border-white shadow-2xl"
          />
          <h5 className="text-2xl md:text-3xl font-bold tracking-wide">
            Presiding Elder: Kofi Tetteh
          </h5>
        </div>

        {/* About Section */}
        <div className="about max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
            About Us
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            We seek to honor God who gave His best (Christ Jesus as the Savior)
            by maintaining a high standard of excellence in all our ministries
            and activities (<span className="italic">Colossians 3:23-24</span>).
            <br />
            <br />
            At the Church of Pentecost, we are committed to building a community
            that reflects the love of Christ. Through our worship, outreach, and
            fellowship, we aim to empower individuals to live purpose-driven
            lives that glorify God and serve others.
          </p>
        </div>
      </section>

      <section className="relative w-full h-screen flex flex-col items-center justify-between py-8 overflow-hidden bg-white">
        <div className="text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
            Love God.
            <br /> Love People.
            <br /> Change the World.
          </h1>
        </div>

        <div className="relative w-full max-w-[988.22px] max-h-[553.39px] h-auto rounded-lg overflow-hidden p-4 sm:p-6 lg:p-0 lg:w-[988.22px] lg:h-[553.39px]">
          <video
            className="w-full h-full object-cover rounded-xl lg:w-[988.22px] lg:h-[553.39px]"
            src="/26th december, 2024(convension).mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="text-center z-10 mt-6">
          <button
            className="bg-indigo-700 text-white py-3 px-8 rounded-full text-lg sm:text-xl font-semibold hover:bg-indigo-800 shadow-md transition duration-300"
            onClick={() => (window.location.href = "/get-involved")}
          >
            Get Involved
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold text-black mb-8">Upcoming Events</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {events.length > 1 ? (
            events.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className="eventCard bg-white shadow-lg rounded-lg overflow-hidden w-80"
              >
                <div className="h-32 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 flex justify-center items-center text-white text-2xl font-bold">
                  {event.title.toUpperCase()}
                </div>
                <div className="p-6 text-left">
                  <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">
                    {event.date}
                  </p>
                  <p className="text-gray-800 font-medium">
                    {event.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-lg">
              No upcoming events at the moment.
            </p>
          )}
        </div>
      </section>

      <section className="upcomingEvent container flex flex-col items-center gap-12 bg-gray-100 p-10 py-16 text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Upcoming Events</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {events.length > 1 ? (
            events.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className="eventCard bg-white shadow-lg rounded-lg overflow-hidden w-80"
              >
                <div className="h-32 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 flex justify-center items-center text-white text-2xl font-bold">
                  {event.title.toUpperCase()}
                </div>
                <div className="p-6 text-left">
                  <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">
                    {event.date}
                  </p>
                  <p className="text-gray-800 font-medium">
                    {event.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-lg">
              No upcoming events at the moment.
            </p>
          )}
        </div>
      </section>

      <section className="latestSermon container flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 p-8 py-16 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 shadow-lg">
          Current Teachings of the Word
        </h2>

        <div className="teachingContainer flex flex-col md:flex-row justify-center items-center gap-10 w-full">
          <div className="flex flex-col justify-center items-center gap-6 bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl border border-gray-300 w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-indigo-700">
              Latest Sermon
            </h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {latestSermon.title}
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                {latestSermon.description}
              </p>
              <p className="font-bold text-lg text-indigo-600 mt-4">
                Speaker: {latestSermon.speaker}
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Date: {new Date(latestSermon.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl border border-gray-300 w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-indigo-700">
              Upcoming Bible Study
            </h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {latestBibleStudy.topic}
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                {latestBibleStudy.description}
              </p>
              <p className="font-bold text-lg text-indigo-600 mt-4">
                Memory Verse: {latestBibleStudy.memoryVerse}
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Main Text: {latestBibleStudy.mainText}
              </p>
            </div>
          </div>
        </div>

        <button
          className="bg-indigo-700 text-white p-4 rounded-lg text-xl mt-8 hover:bg-indigo-800 shadow-lg transition-all duration-300"
          onClick={() => (window.location.href = latestBibleStudy.link)}
        >
          Learn more
        </button>
      </section>
    </div>
  );
};

export default Home;
