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

        <div className="w-full h-full max-w-full max-h-full relative overflow-hidden px-3 sm:px-5 md:px-10 lg:px-10 py-3 sm:py-5 md:pt-3 lg:py-5">
          <img
            src="/Cop%20welcome%20image.png"
            alt="Cop welcome image"
            className="w-full h-full rounded-3xl object-cover"
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


      
      <section className="upcomingEvent container flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-8 py-16 text-center md:text-left">
        <h2 className="text-5xl font-bold mb-8 text-white">Upcoming Events</h2>
        {upcomingEvent ? (
          <div className="eventCard bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl rounded-lg p-8 flex flex-col items-center text-center md:flex-row gap-6">
            <div className="eventDetails text-center md:text-left">
              <h3 className="font-bold text-3xl mb-2">{upcomingEvent.title}</h3>
              <p className="text-lg text-gray-200">{upcomingEvent.date}</p>
              <p className="text-gray-200 mt-4">{upcomingEvent.description}</p>
            </div>
            <button className="bg-indigo-800 text-white p-4 rounded-lg mt-6 md:mt-0 hover:bg-indigo-900 transition-all duration-300">
              Learn more
            </button>
          </div>
        ) : (
          <p className="text-white text-xl">
            No upcoming events at the moment.
          </p>
        )}
      </section>

    </div>
  );
};

export default Home;
