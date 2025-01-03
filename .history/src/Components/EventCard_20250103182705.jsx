import PropTypes from "prop-types";
// import {
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from "@mui/material";

const EventCard = ({ event, onLearnMore }) => (
  <div className="border border-gray-300 shadow-md rounded-lg p-4">
    <h3 className="text-xl font-bold text-blue-600">{event.title}</h3>
    <p className="text-gray-600">{event.date}</p>
    <p className="mt-2">{event.description}</p>
    <button
      onClick={onLearnMore}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Learn More
    </button>
  </div>
);


EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onLearnMore: PropTypes.func.isRequired,
};

export default EventCard;
