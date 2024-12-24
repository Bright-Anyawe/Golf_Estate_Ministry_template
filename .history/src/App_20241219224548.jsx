import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Navbar

function App() {

  return (
    <>
      <div  className='root-layout' >
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App
