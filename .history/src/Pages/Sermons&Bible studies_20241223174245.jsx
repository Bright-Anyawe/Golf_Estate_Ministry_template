import { useState, useEffect } from "react";
import { SermonCard } from "../components/SermonCard";
import { BibleStudiesCard } from "../Components/BibleStudiesCard";

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

  );
};

export default Sermons;
