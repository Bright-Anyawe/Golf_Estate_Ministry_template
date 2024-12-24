import { useState, useEffect } from "react";
import { SermonCard } from "../components/SermonCard";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [bibleStudies, setBibleStudies] = useState([]);

  useEffect(() => {
    // Fetch sermons data
    fetch("public/sermon.json")
      .then((res) => res.json())
      .then((data) => setSermons(data))
      .catch((err) => console.error("Error fetching sermons:", err));

    // Fetch Bible studies data
    fetch("public/bibleStudies.json")
      .then((res) => res.json())
      .then((data) => setBibleStudies(data))
      .catch((err) => console.error("Error fetching Bible studies:", err));
  }, []);

  return (
    <div className="container mx-auto my-8 pt-16 px-4">
      {/* Header Section */}
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Sermons & Bible Studies
      </h1>

      {/* Sermons Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">
          Sermons
        </h2>
        {sermons.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Loading sermons...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {sermons.map((sermon) => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
        )}
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">
          Weekly Bible Studies
        </h2>
        {bibleStudies.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Loading Bible studies...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bibleStudies.map((study) => (
              <div
                key={study.week}
                className="bg-white shadow-xl rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Week {study.week}: {study.topic}
                </h3>
                <p className="text-gray-600 text-lg mb-3">
                  Memory Verse:{" "}
                  <span className="font-semibold">{study.memoryVerse}</span>
                </p>
                <p className="text-gray-600 text-lg mb-3">
                  Main Text:{" "}
                  <span className="font-semibold">{study.mainText}</span>
                </p>
                <p className="text-gray-700 mb-4">{study.description}</p>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  Join Bible Study
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sermons;
