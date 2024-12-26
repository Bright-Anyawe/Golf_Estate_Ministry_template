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
      <div className="relative w-full h-screen ">
        

      <div className="container mx-auto my-16 px-6 sm:px-12">
        {/* Sermons Section */}
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
