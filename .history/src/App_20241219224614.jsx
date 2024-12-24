import { Outlet } from 'react-router-dom';
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
