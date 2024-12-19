import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

function App() {

  return (
    <>
    
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App
