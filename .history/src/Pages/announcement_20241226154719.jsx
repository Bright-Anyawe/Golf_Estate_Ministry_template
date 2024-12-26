import { useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";

export const Announcement = () => {
  const { monthlyAnnouncements, weeklyAnnouncements } =
    useContext(GeneralContext);

  console.log(monthlyAnnouncements);

  return (
    <div>
     
      <div className="w-full h-full max-w-full max-h-full relative overflow-hidden px-3 sm:px-5 md:px-10 lg:px-10 py-3 sm:py-5 md:pt-3 lg:py-5">
        <img
          src="/announcement.png"
          alt="announcement image"
          className="w-full h-full rounded-3xl object-cover"
        />
      </div>

      <div className="weeklyAnnouncement p-6 flex flex-col gap-10 bg-gradient-to-br from-blue-100 to-blue-300">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-800 shadow-lg">
          Weekly Announcements
        </h2>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {weeklyAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                {announcement.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2 italic">
                {announcement.date}
              </p>
              <p className="text-gray-700 text-center">
                {announcement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="monthlyAnnouncement flex flex-col gap-10 items-center justify-center p-8 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-800 drop-shadow-md">
          Monthly Announcements
        </h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {monthlyAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-700">
                {announcement.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 italic">
                {announcement.date}
              </p>
              <p className="text-gray-700 text-center leading-relaxed">
                {announcement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
