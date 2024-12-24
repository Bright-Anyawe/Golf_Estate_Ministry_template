import PropTypes from "prop-types";


const EventCard = ({ event }) => (
  <div className="bg-white shadow-md rounded p-4">
    <h3 className="text-lg font-bold">{event.title}</h3>
    <p>{event.date}</p>
    <p>{event.description}</p>
  </div>
);

export default EventCard;
