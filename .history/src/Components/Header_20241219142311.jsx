import { NavLink } from "react-router-dom";
import 

const Header = () => {

return (
  <>
    <section>
      <div>Golf Estate Assembly</div>
      <div>
        <nav className="navLinks" onClick={handleVisibility}>
          <NavLink to="/" onClick={handleVisibility}>
            Home
          </NavLink>

          <div className="">
            <NavLink to="home" onClick={handleVisibility}>
              Home
            </NavLink>
            <NavLink to="home" onClick={handleVisibility}>
              Home
            </NavLink><NavLink to="home" onClick={handleVisibility}>
              Home
            </NavLink><NavLink to="home" onClick={handleVisibility}>
              Home
            </NavLink><NavLink to="home" onClick={handleVisibility}>
              Home
            </NavLink>
          </div>
        </nav>
      </div>
    </section>
  </>
);
}

export default Header