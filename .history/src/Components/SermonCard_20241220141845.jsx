import SermonCard from


export const SermonCard = ({ sermon }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{sermon.title}</h2>
      <p className="text-gray-700 font-medium">{sermon.speaker}</p>
      <p className="text-gray-500 text-sm">
        {new Date(sermon.date).toLocaleDateString()}
      </p>
      <p className="mt-2 text-gray-700">{sermon.description}</p>
      <a
        href={sermon.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-500 mt-4 hover:underline"
      >
        Listen to Sermon
      </a>
    </div>
  );
};

// export default SermonCard;
