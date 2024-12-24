import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const EventCard = ({ event }) => (
  <Card className="shadow-lg rounded-lg">
    <CardContent>
      <Typography
        variant="h5"
        component="div"
        className="font-semibold text-indigo-600"
      >
        {event.title}
      </Typography>
      <Typography color="text.secondary" className="mt-2">
        {event.date}
      </Typography>
      <Typography variant="body2" className="mt-4">
        {event.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" className="text-indigo-500">
        Learn More
      </Button>
    </CardActions>
  </Card>
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
