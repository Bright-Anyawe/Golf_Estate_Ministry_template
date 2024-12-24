import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
im

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
