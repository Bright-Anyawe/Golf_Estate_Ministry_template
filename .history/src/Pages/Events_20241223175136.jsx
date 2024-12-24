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
    
  );
};

export default Event;
