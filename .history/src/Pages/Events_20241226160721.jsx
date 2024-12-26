import { useContext, useState } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import EventCard from "../Components/EventCard";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";


const Event = () => {
  const { events } = useContext(GeneralContext);
    const [selectedEvent, setSelectedEvent] = useState(null);



    
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
    setRegistration({ name: "", email: "", eventId: "" });
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 opacity-80 z-10"></div>

        {/* Background Image */}
        <img
          src="/peopleWithTheirLifted.png"
          alt="people with their hands lifted"
          className="w-full h-full object-cover"
        />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 sm:px-8">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl text-center leading-tight">
            Events & Programs
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl mt-4 max-w-3xl text-center leading-relaxed">
            Join us in our journey of faith through our diverse events and
            programs that uplift and inspire. From worship services to community
            outreach, there’s a place for everyone to grow closer to God.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-blue-800 font-bold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Explore Events
          </button>
        </div>
      </section>

      <Box className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-8 sm:p-12">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-bold text-indigo-700 mb-6"
        >
          Events & Programs
        </Typography>

        <Grid container spacing={4} className="mb-10">
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>

        {/* Registration Form */}
        <Paper
          elevation={6}
          className="p-6 sm:max-w-lg mx-auto bg-white rounded-lg shadow-md"
        >
          <Typography
            variant="h5"
            className="font-semibold mb-4 text-center text-gray-800"
          >
            Register for an Event
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Box mb={3}>
              <TextField
                label="Full Name"
                variant="outlined"
                name="name"
                value={registration.name}
                onChange={handleInputChange}
                fullWidth
                required
                className="text-gray-700"
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Email Address"
                variant="outlined"
                name="email"
                type="email"
                value={registration.email}
                onChange={handleInputChange}
                fullWidth
                required
                className="text-gray-700"
              />
            </Box>
            <Box mb={3}>
              <TextField
                select
                label="Select Event"
                variant="outlined"
                name="eventId"
                value={registration.eventId}
                onChange={handleInputChange}
                fullWidth
                required
              >
                <MenuItem value="">-- Choose an Event --</MenuItem>
                {events.map((event) => (
                  <MenuItem key={event.id} value={event.id}>
                    {event.title}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out"
            >
              Register
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Event;
