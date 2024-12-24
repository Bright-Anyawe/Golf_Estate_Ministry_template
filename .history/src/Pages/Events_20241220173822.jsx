import { useContext, useState } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import EventCard from "../Components/EventCard";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  MenuItem,
  Grid,
  Box,
} from "@mui/material";

const Event = () => {
  const { events } = useContext(GeneralContext);

  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    eventId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${registration.name}! You registered for Event ID: ${registration.eventId}.`
    );
    setRegistration({ name: "", email: "", eventId: "" }); // Reset form
  };

  return (
    <div className="bg-gray-100 py-6 px-4">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="font-bold"
      >
        Events & Programs
      </Typography>

      <Grid container spacing={4} className="mb-10">
        {events.map((event) => (
          <Grid item xs={12} md={6} lg={4} key={event.id}>
            <Card className="shadow-md">
              <CardContent>
                <Typography variant="h6" className="font-semibold">
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="mb-2"
                >
                  {event.date}
                </Typography>
                <Typography variant="body1">{event.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
        sx={{ boxShadow: 3 }}
      >
        <Typography variant="h5" gutterBottom className="font-semibold">
          Register for an Event
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={registration.name}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={registration.email}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Select Event"
            name="eventId"
            value={registration.eventId}
            onChange={handleInputChange}
            select
            margin="normal"
            variant="outlined"
            required
          >
            <MenuItem value="">-- Choose an Event --</MenuItem>
            {events.map((event) => (
              <MenuItem key={event.id} value={event.id}>
                {event.title}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Event;
