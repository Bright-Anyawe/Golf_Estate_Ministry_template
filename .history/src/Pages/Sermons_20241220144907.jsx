import { useState, useEffect } from "react";
import { SermonCard } from "../components/SermonCard";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [bibleStudies, setBibleStudies] = useState([]);

  useEffect(() => {
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
    <div className="container mx-auto my-8 pt-16">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Sermons & Bible Studies
      </h1>

      {/* Sermons Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sermons</h2>
        {sermons.length === 0 ? (
          <p className="text-center text-gray-500">Loading sermons...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sermons.map((sermon) => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
        )}
      </div>

      {/* Weekly Bible Studies Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Weekly Bible Studies
        </h2>
        {bibleStudies.length === 0 ? (
          <p className="text-center text-gray-500">Loading Bible studies...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bibleStudies.map((study) => (
              <div
                key={study.week}
                className="bg-white shadow-md rounded p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">
                  Week {study.week}: {study.topic}
                </h3>
                <p className="text-gray-700">
                  Memory Verse:{" "}
                  <span className="font-semibold">{study.memoryVerse}</span>
                </p>
                <p className="text-gray-500">
                  Main Text:{" "}
                  <span className="font-semibold">{study.mainText}</span>
                </p>
                <p className="mt-2">{study.description}</p>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-500 mt-4 hover:underline"
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
