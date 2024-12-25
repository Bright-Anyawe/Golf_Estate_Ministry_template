export const BibleStudiesCard = ({ bibleStudies }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-bold text-blue-700 mb-4">
        Week {bibleStudies.week}: {bibleStudies.topic}
      </h3>
      <p className="text-gray-600 text-lg mb-3">
        Memory Verse:{" "}
        <span className="font-semibold">{bibleStudies.memoryVerse}</span>
      </p>
      <p className="text-gray-600 text-lg mb-3">
        Main Text:{" "}
        <span className="font-semibold">{bibleStudies.mainText}</span>
      </p>
      <p className="text-gray-700 mb-4">{bibleStudies.description}</p>
      <a
        href={bibleStudies.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-semibold underline"
      >
        Join Bible Study
      </a>
    </div>
  );
};



BbCard.propTypes = {
  sermon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
