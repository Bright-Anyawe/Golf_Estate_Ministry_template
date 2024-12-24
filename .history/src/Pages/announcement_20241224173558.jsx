import { useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";

export const Announcement = () => {
  const {monthlyAnnouncements, weeklyAnnouncements} = useContext(GeneralContext)

  return (
    <div>
      {/* Introduction Section */}
      <div className="introductionSection bg-[url('/announcement.png')] bg-cover mt-20 bg-center h-screen flex justify-center items-center text-white">
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
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <h3 className="text-xl font-bold mb-2">{announcement.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
              <p className="text-gray-700">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Announcements */}
      <div className="monthlyAnnouncement flex flex-col gap-10 items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-700">
          Monthly Announcements
        </h2>
        <div className="flex gap-10 items-center justify-center">
          {monthlyAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white drop-shadow-2xl rounded-lg p-4 flex flex-col items-center"
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
