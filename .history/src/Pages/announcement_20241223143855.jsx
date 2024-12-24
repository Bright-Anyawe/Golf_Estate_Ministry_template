import React from 'react';

const weeklyAnnouncements = [
  {
    id: 1,
    title: 'Youth Fellowship Meeting',
    date: '2024-12-28',
    description: 'Join us for an inspiring youth fellowship session.',
  },
  {
    id: 2,
    title: 'Bible Study',
    date: '2024-12-29',
    description: 'Deepen your understanding of the Word of God.',
  },
];

const monthlyAnnouncements = [
  {
    id: 1,
    title: 'Community Outreach',
    date: '2024-12-31',
    description: 'Join us as we serve the community together.',
  },
  {
    id: 2,
    title: 'Church Cleanup Day',
    date: '2025-01-05',
    description: 'Help us keep our sanctuary clean and welcoming.',
  },
];

export const Announcement = () => {
  return (
    <div>
      {/* Introduction Section */}
      <div className="introductionSection bg-[url('/announcement.png')] bg-cover bg-center h-64 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
          Announcements
        </h1>
      </div>

      {/* Weekly Announcements */}
      <div className="weeklyAnnouncement p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Weekly Announcements</h2>
        <ul className="space-y-4">
          {weeklyAnnouncements.map((announcement) => (
            <li
              key={announcement.id}
              className="p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {announcement.title}
              </h3>
              <p className="text-sm text-gray-600">Date: {announcement.date}</p>
              <p className="mt-2">{announcement.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Monthly Announcements */}
      <div className="monthlyAnnouncement p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Monthly Announcements</h2>
        <ul className="space-y-4">
          {monthlyAnnouncements.map((announcement) => (
            <li
              key={announcement.id}
              className="p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {announcement.title}
              </h3>
              <p className="text-sm text-gray-600">Date: {announcement.date}</p>
              <p className="mt-2">{announcement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
