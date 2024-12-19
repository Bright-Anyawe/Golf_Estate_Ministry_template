import { useState } from "react";
const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [newTestimony, setNewTestimony] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimony) {
      setTestimonies([...testimonies, newTestimony]);
      setNewTestimony("");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Testimony Sharing</h1>

      <form onSubmit={handleSubmit} className="my-6">
        <textarea
          className="w-full border p-2 rounded"
          value={newTestimony}
          onChange={(e) => setNewTestimony(e.target.value)}
          placeholder="Share your testimony here..."
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Submit
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold">Shared Testimonies</h2>
        {testimonies.length > 0 ? (
          testimonies.map((testimony, index) => (
            <div key={index} className="my-4 p-4 bg-gray-100 rounded shadow">
              {testimony}
            </div>
          ))
        ) : (
          <p>No testimonies shared yet.</p>
        )}
      </div>
    </div>
  );
};

export default Testimonies;
