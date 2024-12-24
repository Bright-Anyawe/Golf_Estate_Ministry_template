import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

import { GeneralContext } from './Context/ChurchContext';

function App() {

   const [events] = useState([
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
      description: "An evening of prayer, praise, and discussion for young adults.",
    },
    {
      id: 3,
      title: "Community Outreach",
      date: "2025-01-05",
      description: "Help us serve the community with food and clothing donations.",
    },
  ]);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};

  return (
    <>
      <GeneralContext.Provider value={{}}>
        <Header />
        <main>
          <Outlet />
        </main>
      </GeneralContext.Provider>
    </>
  );
}

export default App
