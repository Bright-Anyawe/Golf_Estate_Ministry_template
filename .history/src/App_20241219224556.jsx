import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/NavBar';

function App() {

  return (
    <>
      <div className="root-layout">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App
