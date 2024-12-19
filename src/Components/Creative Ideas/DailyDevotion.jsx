

import { useEffect, useState } from "react";
const DailyDevotional = () => {
  const [devotional, setDevotional] = useState({
    scripture: "Psalm 23:1",
    thought: "The Lord is my shepherd; I shall not want.",
  });

  useEffect(() => {
    // Fetch daily devotional content (e.g., from an API or database)
    // Example static content for now:
    const fetchDevotional = () => {
      setDevotional({
        scripture: "John 3:16",
        thought:
          "For God so loved the world that He gave His only begotten Son.",
      });
    };

    fetchDevotional();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Daily Devotional</h1>
      <div className="my-6 p-4 bg-blue-100 rounded shadow">
        <h2 className="text-lg font-semibold">Today&apos;s Scripture</h2>
        <p className="italic">&quot;{devotional.scripture}&quot;</p>
        <h3 className="text-md font-semibold mt-4">Thought for the Day</h3>
        <p>{devotional.thought}</p>
      </div>
    </div>
  );
};

export default DailyDevotional;
