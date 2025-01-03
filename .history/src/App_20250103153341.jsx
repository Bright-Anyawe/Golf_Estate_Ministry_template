import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { useState } from "react";
import Footer from "./Components/Footer";

import { GeneralContext } from "./Context/ChurchContext";

function App() {
  const formatDateString = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  
  const [events] = useState(
    [
      {
        id: 1,
        title: "Sunday Service(LORD'S SUPPER 5TH JANUARY, 2024)",
        date: "2025-12-24",
        description: "Join us for worship and a sermon at 9:00 AM.",
        programOutline: [
          {
            time: "9:00 AM",
            activity: "Opening Prayer",
            responsible: "Eld. Bannor",
          },
          {
            time: "9:15 AM",
            activity: "Praise and Worship",
            responsible: "Choir",
          },
          {
            time: "9:45 AM",
            activity: "Sermon",
            responsible: "Pastor John Doe",
          },
        ],
      },
      {
        id: 2,
        title: "Youth Fellowship",
        date: "2024-12-30",
        description:
          "An evening of prayer, praise, and discussion for young adults.",
        programOutline: [
          {
            time: "9:00 AM",
            activity: "Opening Prayer",
            responsible: "Eld. Bannor",
          },
          {
            time: "9:15 AM",
            activity: "Praise and Worship",
            responsible: "Choir",
          },
          {
            time: "9:45 AM",
            activity: "Sermon",
            responsible: "Pastor John Doe",
          },
        ],
      },
      {
        id: 3,
        title: "Community Outreach",
        date: "2025-01-05",
        description:
          "Help us serve the community with food and clothing donations.",
        programOutline: [
          {
            time: "9:00 AM",
            activity: "Opening Prayer",
            responsible: "Eld. Bannor",
          },
          {
            time: "9:15 AM",
            activity: "Praise and Worship",
            responsible: "Choir",
          },
          {
            time: "9:45 AM",
            activity: "Sermon",
            responsible: "Pastor John Doe",
          },
        ],
      },

    ].map((event) => ({
      ...event,
      date: formatDateString(event.date),
    }))
  );

  const [sermons] = useState(
    [
      {
        id: 1,
        title: "Faith in Action",
        speaker: "Pastor John Doe",
        date: "2024-12-10",
        description:
          "A message on living out your faith with boldness and integrity.",
        link: "https://example.com/sermon1",
      },
      {
        id: 2,
        title: "Walking in Love",
        speaker: "Elder Jane Smith",
        date: "2024-12-03",
        description:
          "Discover the transformative power of God's love in your life.",
        link: "https://example.com/sermon2",
      },
      {
        id: 3,
        title: "The Power of Prayer",
        speaker: "Deacon Peter Brown",
        date: "2024-11-25",
        description:
          "Learn how to unlock God's promises through persistent prayer.",
        link: "https://example.com/sermon3",
      },
    ].map((event) => ({
      ...event,
      date: formatDateString(event.date),
    }))
  );

  const weeklyAnnouncements = [
    {
      id: 1,
      title: "Prayer Meeting",
      date: "2024-12-27",
      description: "Join us for a time of prayer and fellowship at 7 PM.",
    },
    {
      id: 2,
      title: "Youth Bible Study",
      date: "2024-12-28",
      description: "A study session for the youth at 6 PM.",
    },
  ].map((event) => ({
    ...event,
    date: formatDateString(event.date),
  }));

  const monthlyAnnouncements = [
    {
      id: 1,
      title: "Monthly Outreach",
      date: "2024-12-30",
      description: "Community outreach program at 10 AM.",
    },
    {
      id: 2,
      title: "Leadership Retreat",
      date: "2024-12-31",
      description: "Leadership training and planning session at 9 AM.",
    },
  ].map((event) => ({
    ...event,
    date: formatDateString(event.date),
  }));

  const [bibleStudies] = useState([
    {
      week: 1,
      topic: "Faith and Works",
      memoryVerse: "James 2:14-26",
      mainText: "James 2:14-26",
      description: "Understanding the relationship between faith and works.",
      link: "https://example.com/bible-study/faith-and-works",
    },
    {
      week: 2,
      topic: "The Power of Prayer",
      memoryVerse: "Matthew 7:7-11",
      mainText: "Matthew 7:7-11",
      description: "The role of prayer in the life of a believer.",
      link: "https://example.com/bible-study/power-of-prayer",
    },
    {
      week: 3,
      topic: "The Fruit of the Spirit",
      memoryVerse: "Galatians 5:22-23",
      mainText: "Galatians 5:22-23",
      description:
        "Exploring the fruit of the Spirit and how to cultivate them.",
      link: "https://example.com/bible-study/fruit-of-the-spirit",
    },
  ]);

  return (
    <>
      <GeneralContext.Provider
        value={{
          events,
          sermons,
          bibleStudies,
          weeklyAnnouncements,
          monthlyAnnouncements,
        }}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </GeneralContext.Provider>
    </>
  );
}

export default App;
