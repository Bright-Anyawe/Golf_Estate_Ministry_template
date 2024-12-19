import { useState } from "react";

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [newTestimony, setNewTestimony] = useState("");
  const [categories] = useState([
    "Healing",
    "Provision",
    "Salvation",
    "Others",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Healing");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimony) {
      const testimony = {
        text: newTestimony,
        category: selectedCategory,
        approved: false, // Await admin approval
        likes: 0,
        comments: [],
      };
      setTestimonies([...testimonies, testimony]);
      setNewTestimony("");
    }
  };

  const approveTestimony = (index) => {
    const updatedTestimonies = [...testimonies];
    updatedTestimonies[index].approved = true;
    setTestimonies(updatedTestimonies);
  };

  const likeTestimony = (index) => {
    const updatedTestimonies = [...testimonies];
    updatedTestimonies[index].likes += 1;
    setTestimonies(updatedTestimonies);
  };

  const addComment = (index, comment) => {
    const updatedTestimonies = [...testimonies];
    updatedTestimonies[index].comments.push(comment);
    setTestimonies(updatedTestimonies);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Testimony Sharing</h1>

      {/* Testimony Submission Form */}
      <form onSubmit={handleSubmit} className="my-6">
        <textarea
          className="w-full border p-2 rounded"
          value={newTestimony}
          onChange={(e) => setNewTestimony(e.target.value)}
          placeholder="Share your testimony here..."
        ></textarea>
        <div className="my-4">
          <label className="block text-sm font-semibold">Category:</label>
          <select
            className="border rounded p-2 w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* Display Testimonies */}
      <div>
        <h2 className="text-xl font-semibold">Shared Testimonies</h2>
        {testimonies.length > 0 ? (
          testimonies.map(
            (testimony, index) =>
              testimony.approved && (
                <div
                  key={index}
                  className="my-4 p-4 bg-gray-100 rounded shadow relative"
                >
                  <p className="italic">"{testimony.text}"</p>
                  <p className="text-sm text-gray-500">
                    Category: {testimony.category}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => likeTestimony(index)}
                      className="mr-4 text-blue-500"
                    >
                      👍 {testimony.likes}
                    </button>
                    <button
                      onClick={() => {
                        const comment = prompt("Add a comment:");
                        if (comment) addComment(index, comment);
                      }}
                      className="text-green-500"
                    >
                      💬 Comment
                    </button>
                  </div>
                  {/* Display Comments */}
                  {testimony.comments.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold">Comments:</h4>
                      {testimony.comments.map((comment, i) => (
                        <p key={i} className="text-sm text-gray-600">
                          - {comment}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )
          )
        ) : (
          <p>No testimonies shared yet.</p>
        )}
      </div>

      {/* Admin Moderation */}
      <div>
        <h2 className="text-xl font-semibold">Pending Approval</h2>
        {testimonies.filter((testimony) => !testimony.approved).length > 0 ? (
          testimonies
            .filter((testimony) => !testimony.approved)
            .map((testimony, index) => (
              <div
                key={index}
                className="my-4 p-4 bg-yellow-100 rounded shadow relative"
              >
                <p className="italic">{testimony.text}"</p>
                <p className="text-sm text-gray-500">
                  Category: {testimony.category}
                </p>
                <button
                  onClick={() => approveTestimony(index)}
                  className="bg-green-500 text-white px-2 py-1 mt-2 rounded"
                >
                  Approve
                </button>
              </div>
            ))
        ) : (
          <p>No testimonies awaiting approval.</p>
        )}
      </div>
    </div>
  );
};

export default Testimonies;
