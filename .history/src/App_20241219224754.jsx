import { Outlet } from 'react-router-dom';
import Header
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
