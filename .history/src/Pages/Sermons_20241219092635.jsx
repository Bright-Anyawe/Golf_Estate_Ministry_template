import React, { useEffect, useState } from "react";
import SermonCard from "../components/SermonCard";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    fetch("/sermons.json")
      .then((res) => res.json())
      .then((data) => setSermons(data));
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Sermons</h1>
      <div className="grid grid-cols-3 gap-4">
        {sermons.map((sermon) => (
          <SermonCard key={sermon.id} sermon={sermon} />
        ))}
      </div>
    </div>
  );
};

export default Sermons;
