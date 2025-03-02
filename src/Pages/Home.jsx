import { useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import Footer from "../Components/Footer";
import { IconButton } from "@mui/material";
// import { DarkMode, LightMode } from "@mui/icons-material";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "../Components/ButtonForProgramOutline";
import HeroSection from "../Components/HeroSection";
import BeforeYouSleep from "../Components/BeforeYouSleep";

const Home = () => {
  const { events, sermons, bibleStudies, handleDialogOpen } =
    useContext(GeneralContext);
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
      

      {}
       <HeroSection />
      {}

      <section className="presidingSection bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white flex flex-col md:flex-row justify-center items-center gap-16 p-8 py-20">
        {}
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

        {}
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
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row  gap-8">
          <div className=" flex flex-col gap-20 text-content w-full lg:w-1/2">
            <div className="welcome">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Welcome to Our Church
              </h1>
              <p className="text-2xl text-gray-700 leading-relaxed flex flex-col items-start">
                At the Church of Pentecost, we aim to glorify God through
                worship, outreach, and building a Christ-centered community.
                Join us in spreading the message of love, hope, and salvation to
                the world.
              </p>
              <button
                className="mt-6 bg-indigo-700 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-800 transition duration-300"
                // onClick={() => (window.location.href = "/about")}
              >
                <Link to="/aboutUs"> Get Involved</Link>
              </button>
            </div>
            <BeforeYouSleep/>
            {}
          </div>

          <div className="video-content w-full lg:w-1/2">
            <video
              width="100%"
              height="auto"
              className="rounded-lg shadow-lg"
              src="/31st all night 2025.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </section>

      <section className="upcoming-events bg-gray-50 py-16 flex flex-col gap-10">
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
                  <Button onLearnMore={() => handleDialogOpen(event)} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg">
              No upcoming events at the moment.
            </p>
          )}
        </div>

        <button className="self-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300">
          <Link to="event"> Learn More</Link>
        </button>
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
