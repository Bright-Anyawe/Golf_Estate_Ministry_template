import PropTypes from "prop-types";

const EventCard = ({ event }) => (
  <div>
    <h3>{event.title}</h3>
    <p>{event.date}</p>
    <p>{event.description}</p>
  </div>
);

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
