import  { useState } from "react";

const Event = () => {
  // Example event data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Sunday Service",
      date: "2024-12-24",
      description: "Join us for worship and a sermon at 9:00 AM.",
    },
    {
      id: 2,
      title: "Youth Fellowship",
      date: "2024-12-30",
      description:
        "An evening of prayer, praise, and discussion for young adults.",
    },
    {
      id: 3,
      title: "Community Outreach",
      date: "2025-01-05",
      description:
        "Help us serve the community with food and clothing donations.",
    },
  ]);

  // State for handling registration
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
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Events & Programs</h1>

      {/* Event Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Registration Form */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Register for an Event</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={registration.name}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={registration.email}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventId"
              className="block text-sm font-medium text-gray-700"
            >
              Select Event
            </label>
            <select
              id="eventId"
              name="eventId"
              value={registration.eventId}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              required
            >
              <option value="">-- Choose an Event --</option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Event;
