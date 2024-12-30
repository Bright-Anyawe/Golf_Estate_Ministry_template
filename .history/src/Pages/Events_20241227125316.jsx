import { useContext, useState, useRef } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import EventCard from "../Components/EventCard";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
} from "@mui/material";

const Event = () => {
  const { events } = useContext(GeneralContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventsSectionRef = useRef(null);

  const handleDialogOpen = (event) => setSelectedEvent(event);
  const handleDialogClose = () => setSelectedEvent(null);

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

  const handleExploreEventsClick = () => {
    eventsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(e.target), 
      });

      const data = await response.json();

      if (data.success) {
        setRegistration({ name: "", email: "", eventId: "" });
        alert("Form submitted successfully!");
      } else {
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };


  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 opacity-80 z-10"></div>

        <img
          src="/peopleWithTheirLifted.png"
          alt="people with their hands lifted"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 sm:px-8">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl text-center leading-tight">
            Events & Programs
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl mt-4 max-w-3xl text-center leading-relaxed">
            Join us in our journey of faith through our diverse events and
            programs that uplift and inspire. From worship services to community
            outreach, there’s a place for everyone to grow closer to God.
          </p>
          <button
            className="mt-6 px-8 py-3 bg-white text-blue-800 font-bold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            onClick={handleExploreEventsClick}
          >
            Explore Events
          </button>
        </div>
      </section>

      <Box
        className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-8 sm:p-12"
        ref={eventsSectionRef}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-bold text-indigo-700 mb-6"
        >
          Events & Programs
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onLearnMore={() => handleDialogOpen(event)}
            />
          ))}
        </div>


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
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() =>
              setRegistration({ name: "", email: "", eventId: "" })
            }
          >
            <input
              type="hidden"
              name="access_key"
              value="ec323071-c9a1-48e4-9bba-87c32ecc2b27"
            />
            <input type="hidden" name="Event_ID" value={registration.eventId} />
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
              onL
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

      {selectedEvent && (
        <Dialog open onClose={handleDialogClose}>
          <DialogTitle>{selectedEvent.title} - Program Outline</DialogTitle>
          <DialogContent>
            {selectedEvent.programOutline.map((item, index) => (
              <div key={index} className="mb-4">
                <Typography variant="body1">
                  <strong>{item.time}</strong>: {item.activity} by{" "}
                  {item.responsible}
                </Typography>
              </div>
            ))}
          </DialogContent>
          <div className="p-4">
            <Button
              onClick={handleDialogClose}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </Button>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Event;
