import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

import { GeneralContext } from './Context/ChurchContext';

function App() {

  return (
    <>
      <GeneralContext.Provider value>
        <Header />
        <main>
          <Outlet />
        </main>
      </GeneralContext.Provider>
    </>
  );
}

export default App
