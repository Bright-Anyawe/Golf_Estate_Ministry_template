import { useState } from "react";


const PrayerWall = () => {
  const [prayers, setPrayers] = useState([]);
  const [newPrayer, setNewPrayer] = useState("");

  const handleAddPrayer = (e) => {
    e.preventDefault();
    if (newPrayer) {
      setPrayers([...prayers, { text: newPrayer, prayed: false }]);
      setNewPrayer("");
    }
  };

  const markAsPrayed = (index) => {
    setPrayers(
      prayers.map((prayer, i) =>
        i === index ? { ...prayer, prayed: true } : prayer
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Prayer Wall</h1>

      <form onSubmit={handleAddPrayer} className="my-6">
        <textarea
          className="w-full border p-2 rounded"
          value={newPrayer}
          onChange={(e) => setNewPrayer(e.target.value)}
          placeholder="Submit your prayer request here..."
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
        >
          Submit
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold">Prayer Requests</h2>
        {prayers.length > 0 ? (
          prayers.map((prayer, index) => (
            <div
              key={index}
              className={`my-4 p-4 rounded shadow ${
                prayer.prayed ? "bg-green-100" : "bg-gray-100"
              }`}
            >
              <p>{prayer.text}</p>
              {!prayer.prayed && (
                <button
                  onClick={() => markAsPrayed(index)}
                  className="text-blue-500 mt-2 underline"
                >
                  Mark as Prayed
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No prayer requests yet.</p>
        )}
      </div>
    </div>
  );
};

export default PrayerWall;
