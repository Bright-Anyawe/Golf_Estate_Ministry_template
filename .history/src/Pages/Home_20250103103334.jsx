import { useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import Footer from "../Components/Footer";
import { IconButton } from "@mui/material";
// import { DarkMode, LightMode } from "@mui/icons-material";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const { events, sermons, bibleStudies } = useContext(GeneralContext);
  const [darkMode, setDarkMode] = useState(false);

  // const handleDarkModeToggle = () => {
  //   const isDark = !darkMode;
  //   setDarkMode(isDark);
  //   document.body.classList.toggle("dark", isDark);
  //   console.log(document.body.className);
  // };

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
        <div className="w-full h-full max-w-full max-h-full relative overflow-hidden px-3 sm:px-5 md:px-10 lg:px-10 py-3 sm:py-5 md:pt-3 lg:py-5">
          <img
            src="/Cop%20welcome%20image.png"
            alt="Cop welcome image"
            className="w-full h-full rounded-3xl object-cover sm:h-10 md:h-96 lg:h-auto"
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
      {/* 
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-contain"
            src="/31st all night 2025.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Love God. <br /> Love People. <br /> Change the World.
          </h1>
          <button
            className="bg-indigo-700 text-white py-3 px-8 rounded-full text-lg sm:text-xl font-semibold hover:bg-indigo-800 shadow-md transition duration-300"
            onClick={() => (window.location.href = "/get-involved")}
          >
            Get Involved
          </button>
        </div>
      </section> */}

      <section className="relative w-full h-screen flex  items-center justify-between py-8 overflow-hidden bg-white">
        <div className="sub">
          <div className="text-center z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
              Love God.
              <br /> Love People.
              <br /> Change the World.
            </h1>
          </div>

          <div className="absolute inset-0 w-full h-full max-w-[988.22px] max-h-[553.39px]  rounded-lg overflow-hidden p-4 sm:p-6 lg:p-0 lg:w-[988.22px] lg:h-[553.39px]">
            <video
              width="320"
              height="540"
              className=" responsive-video w-full h-full  object-contain rounded-xl lg:w-[988.22px] lg:h-[553.39px]"
              src="/31st all night 2025.mp4"
              autoPlay
              loop
              muted
            />
          </div>
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
      <section className="upcoming-events bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Upcoming Events
        </h2>
        <div className="flex flex-wrap justify-center gap-12 px-4">
          {events.length > 1 ? (
            events.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className="event-card bg-white shadow-xl rounded-lg overflow-hidden w-80 transition-transform transform hover:scale-105"
              >
                <div className="h-40 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 flex justify-center items-center text-white text-2xl font-bold">
                  {event.title.toUpperCase()}
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                    {event.date}
                  </p>
                  <p className="text-gray-700 font-medium text-base mb-4">
                    {event.description}
                  </p>
                  <button className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition-all">
                    <Link to="event">Learn More</Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg">
              No upcoming events at the moment.
            </p>
          )}
        </div>
      </section>
      <section className="latestSermon bg-gray-50 py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Current Teachings of the Word
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="sermon-card bg-white shadow-xl rounded-lg w-full md:w-5/12 overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-40 bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 flex justify-center items-center text-white text-3xl font-bold">
              Latest Sermon
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {latestSermon.title}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {latestSermon.description}
              </p>
              <p className="text-lg font-semibold text-indigo-600">
                Speaker: {latestSermon.speaker}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Date: {new Date(latestSermon.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="bible-study-card bg-white shadow-xl rounded-lg w-full md:w-5/12 overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-40 bg-gradient-to-r from-teal-500 via-green-500 to-yellow-500 flex justify-center items-center text-white text-3xl font-bold">
              Upcoming Bible Study
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {latestBibleStudy.topic}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {latestBibleStudy.description}
              </p>
              <p className="text-lg font-semibold text-teal-600">
                Memory Verse: {latestBibleStudy.memoryVerse}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Main Text: {latestBibleStudy.mainText}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="bg-indigo-700 text-white px-8 py-4 rounded-lg text-xl hover:bg-indigo-800 shadow-lg transition-all duration-300"
            onClick={() => (window.location.href = latestBibleStudy.link)}
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
