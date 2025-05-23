import { useState, useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import Footer from "../Components/Footer";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const Home = () => {
  const { events, sermons, bibleStudies } = useContext(GeneralContext);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !darkMode); // Add dark mode class to body
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
        <div className="darkMode">
          <IconButton
            onClick={handleDarkModeToggle}
            className="transition-all duration-300 transform hover:scale-110"
            style={{ color: darkMode ? "#fff" : "#000" }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </div>

        <div className="w-full h-full max-w-full max-h-full relative overflow-hidden  mt-24 px-20 py-10">
          <img
            src="/Cop%20welcome%20image.png"
            alt="Cop welcome image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="presidingSection bg-slate-400 dark:bg-slate-800 flex flex-col md:flex-row justify-center items-center gap-24 p-4 py-16 text-center md:text-left">
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

      <section className="upcomingEvent container flex flex-col justify-center items-center gap-10 bg-gray-300 dark:bg-gray-700 p-8 py-16 text-center md:text-left">
        <h2 className="text-5xl font-bold mb-4 text-#377dff dark:text-indigo-300 text-indigo-700">
          Upcoming Events
        </h2>
        {upcomingEvent ? (
          <div className="eventCard bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center text-2xl">
            <h3 className="font-bold text-gray-800 dark:text-gray-200">
              {upcomingEvent.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {upcomingEvent.date}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {upcomingEvent.description}
            </p>
            <button className="bg-indigo-700 text-white p-3 border-spacing-1 rounded-lg mt-4">
              Learn more
            </button>
          </div>
        ) : (
          <p>No upcoming events at the moment.</p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
