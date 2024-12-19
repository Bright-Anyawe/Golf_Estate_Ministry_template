import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

function App() {

  return (
    <>
      <div  className='roo' >
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App
