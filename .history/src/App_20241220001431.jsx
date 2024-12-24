import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

import { GeneralContext } from './Context/ChurchContext';

function App() {

  return (
    <>
      <GeneralContext>
        <Header />
        <main>
          <Outlet />
        </main>
      </GeneralContext>
    </>
  );
}

export default App
