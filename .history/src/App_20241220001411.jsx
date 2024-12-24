import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

import { GeneralContext } from './Context/ChurchContext';

function App() {

  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
    </>
  );
}

export default App
