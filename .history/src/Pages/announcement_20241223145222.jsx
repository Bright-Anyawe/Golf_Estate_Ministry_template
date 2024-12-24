export const Announcement = () => {
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
  ];

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
  ];

  return (
    <div>
      {/* Introduction Section */}
      <div className="introductionSection bg-[url('/announcement.png')] bg-cover bg-center h-64 flex justify-center items-center text-white">
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded-md">
          Announcements
        </h1>
      </div>

      {/* Weekly Announcements */}
      <div className="weeklyAnnouncement p-6 flex flex-col gap-10">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-700">
          Weekly Announcements
        </h2>
        <div className="flex gap-5 items-center justify-center">
          {weeklyAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start"
            >
              <h3 className="text-xl font-bold mb-2">{announcement.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
              <p className="text-gray-700">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Announcements */}
      <div className="monthlyAnnouncement p-6 flex flex-col gap-5 items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-700">
          Monthly Announcements
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {monthlyAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start"
            >
              <h3 className="text-xl font-bold mb-2">{announcement.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
              <p className="text-gray-700">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
