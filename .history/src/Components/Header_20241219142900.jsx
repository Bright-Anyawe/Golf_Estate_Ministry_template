import { NavLink } from "react-router-dom";
import Navbar from "./NavBar";

const Header = () => {

return (
  <>
    <section>
      <div>Golf Estate Assembly</div>

      <div>
        <NavLink to="home" onClick={handleVisibility}>
          Home
        </NavLink>
      </div>
    </section>
  </>
);
}

export default Header