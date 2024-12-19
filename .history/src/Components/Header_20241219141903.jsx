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
          <div className="shopCartContainer">
            <NavLink to="shop" onClick={handleVisibility}>
              Shop
            </NavLink>
            
          </div>
        </nav>
      </div>
    </section>
  </>
);
}

export default Header