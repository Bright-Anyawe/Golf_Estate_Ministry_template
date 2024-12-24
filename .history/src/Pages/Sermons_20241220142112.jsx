import { useState, useEffect } from "react";
import Ser
const Sermons = () => {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    fetch("/sermons.json")
      .then((res) => res.json())
      .then((data) => setSermons(data))
      .catch((err) => console.error("Error fetching sermons:", err));
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Sermons</h1>
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
  );
};

export default Sermons;
