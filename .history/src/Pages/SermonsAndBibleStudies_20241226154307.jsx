import { useState, useEffect } from "react";
import SermonCard from "../Components/SermonCard";
import BibleStudiesCard from "../Components/BibleStudies";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [bibleStudies, setBibleStudies] = useState([]);

  useEffect(() => {
    fetch("public/sermon.json")
      .then((res) => res.json())
      .then((data) => setSermons(data))
      .catch((err) => console.error("Error fetching sermons:", err));

    fetch("public/bibleStudies.json")
      .then((res) => res.json())
      .then((data) => setBibleStudies(data))
      .catch((err) => console.error("Error fetching Bible studies:", err));
  }, []);

  return (
    <>
      <section className="relative w-full h-screen bg-gradient-to-b from-blue-900 to-blue-600">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 opacity-80 z-10"></div>

        <img
          src="/bibleStudies2.png"
          alt="Bible Studies"
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center mb-4 drop-shadow-lg">
            Sermons & Bible Studies
          </h1>
          <p className="text-white text-lg md:text-2xl text-center max-w-3xl leading-relaxed drop-shadow-md">
            Dive deeper into the Word of God through our carefully curated
            sermons and weekly Bible studies. Join us in growing spiritually and
            living purpose-driven lives.
          </p>
        </div>
      </section>

      <div className="container mx-auto my-16 px-6 sm:px-12">
        <div className="bg-gradient-to-r from-gray-100 to-blue-50 p-10 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
            Sermons
          </h2>
          {sermons.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Loading sermons...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sermons.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))}
            </div>
          )}
        </div>

        {/* Weekly Bible Studies Section */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-10 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
            Weekly Bible Studies
          </h2>
          {bibleStudies.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Loading Bible studies...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {bibleStudies.map((study) => (
                <BibleStudiesCard key={study.week} bibleStudies={study} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );

};

export default Sermons;
