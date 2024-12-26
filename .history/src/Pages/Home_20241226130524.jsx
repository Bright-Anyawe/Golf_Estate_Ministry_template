import { useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import Footer from "../Components/Footer";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useState } from "react";
import {  Typography } from "@mui/material";


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
        <div className="darkMode flex items-end flex-col justify-around">
          <IconButton
            onClick={handleDarkModeToggle}
            className="transition-all duration-300 transform hover:scale-110 relative top-0 right-20"
            style={{ color: darkMode ? "#fff" : "#000" }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </div>
        {/* 
        <div className="relative w-full h-screen">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-500 opacity-70 z-10"></div>
          <img
            src="/congregation.jpg"
            alt="concregation"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="absolute inset-0 z-50 flex items-center opacity-100   justify-center">
            <Typography
              variant="h1"
              className="text-white font-extrabold text-4xl sm:text-6xl text-center leading-tight"
            >
              <p className="welcomeText">Welcome </p>{" "}
              <span className="subText">To Golf Estate Assembly</span>
            </Typography>
          </div>
        </div> */}

        <div className="w-full h-full max-w-full max-h-full relative overflow-hidden px-4 sm:px-10 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10 lg:py-1">
          <img
            src="/Cop%20welcome%20image.png"
            alt="Cop welcome image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
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
      {/* 
      <section className="upcomingEvent container  flex flex-col justify-center items-center gap-10 bg-gray-300  p-8 py-16 text-center md:text-left">
        <h2 className="text-5xl font-bold mb-4 text-#377dff text-indigo-700">
          Upcoming Events
        </h2>
        {upcomingEvent ? (
          <div className="eventCard bg-white  shadow-lg rounded-lg p-6 flex flex-col items-center text-center text-2xl">
            <h3 className=" font-bold text-gray-800">{upcomingEvent.title}</h3>
            <p className="text-gray-600 ">{upcomingEvent.date}</p>
            <p className="text-gray-600">{upcomingEvent.description}</p>
            <button className="bg-indigo-700 text-white p-3 border-spacing-1 rounded-lg mt-4">
              Learn more
            </button>
          </div>
        ) : (
          <p>No upcoming events at the moment.</p>
        )}
      </section> */}
      {/* <section className="upcomingEvent container flex flex-col justify-center items-center gap-10 bg-gray-300 p-8 py-16 text-center md:text-left">
        <h2 className="text-5xl font-bold mb-4 text-indigo-700">
          Upcoming Events
        </h2>
        {upcomingEvent ? (
          <div className="eventCard bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 text-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center text-2xl">
            <h3 className="font-bold text-white">{upcomingEvent.title}</h3>
            <p className="text-gray-200">{upcomingEvent.date}</p>
            <p className="text-gray-200">{upcomingEvent.description}</p>
            <button className="bg-indigo-700 text-white p-3 border-spacing-1 rounded-lg mt-4">
              Learn more
            </button>
          </div>
        ) : (
          <p>No upcoming events at the moment.</p>
        )}
      </section> */}
      <section className="upcomingEvent container flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-700 p-8 py-16 text-center md:text-left">
        <h2 className="text-5xl font-bold mb-4 text-white">Upcoming Events</h2>
        {upcomingEvent ? (
          <div className="eventCard bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 text-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center text-2xl">
            <h3 className="font-bold text-white">{upcomingEvent.title}</h3>
            <p className="text-gray-200">{upcomingEvent.date}</p>
            <p className="text-gray-200">{upcomingEvent.description}</p>
            <button className="bg-indigo-700 text-white p-3 border-spacing-1 rounded-lg mt-4">
              Learn more
            </button>
          </div>
        ) : (
          <p className="text-white">No upcoming events at the moment.</p>
        )}
      </section>
      <section className="latestSermon container flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-gray-300 via-yellow-300 to-blue-600 p-8 py-16 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 shadow-lg">
          Current Teachings of the Word
        </h2>

        <div className="teachingContainer flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Latest Sermon Section */}
          <div className="flex flex-col justify-center items-center gap-5 bg-white bg-opacity-90 p-6 rounded-lg shadow-2xl border border-gray-300">
            <h2 className="text-3xl font-bold mb-4 text-indigo-700 shadow-sm">
              Latest Sermon
            </h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {latestSermon.title}
              </h3>
              <p className="text-lg text-gray-700">
                {latestSermon.description}
              </p>
              <p className="font-bold text-lg text-indigo-600">
                Speaker: {latestSermon.speaker}
              </p>
              <p className="text-lg text-gray-600">
                Date: {new Date(latestSermon.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Upcoming Bible Study Section */}
          <div className="flex flex-col justify-center items-center gap-5 bg-white bg-opacity-90 p-6 rounded-lg shadow-2xl border border-gray-300">
            <h2 className="text-3xl font-bold mb-4 text-indigo-700 shadow-sm">
              Upcoming Bible Study
            </h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {latestBibleStudy.topic}
              </h3>
              <p className="text-lg text-gray-700">
                {latestBibleStudy.description}
              </p>
              <p className="font-bold text-lg text-indigo-600">
                Memory Verse: {latestBibleStudy.memoryVerse}
              </p>
              <p className="text-lg text-gray-600">
                Main Text: {latestBibleStudy.mainText}
              </p>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <button
          className="WordBtn bg-indigo-700 text-white p-3 rounded-lg text-xl mt-8 hover:bg-indigo-800 shadow-lg transition duration-300"
          onClick={() => (window.location.href = latestBibleStudy.link)}
        >
          Learn more
        </button>
      </section>
    </div>
  );
};

export default Home;
