import { NavLink } from "react-router-dom";
import NavBar

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
          
      </div>
    </section>
  </>
);
}

export default Header