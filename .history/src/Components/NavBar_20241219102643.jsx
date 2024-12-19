import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="font-bold text-xl">
        Church of Pentecost
      </Link>
      <div>
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/about" className="mx-2">
          About
        </Link>
        <Link to="/sermons" className="mx-2">
          Sermons
        </Link>
        <Link to="/events" className="mx-2">
          Events
        </Link>
        This how I want the ministries route to be:
1. when user hover the ministries tab or nav, it should display a drop down nav containing Youth ministry, women’s and men’s fellowship, evangelism, that user can click on and will be take to the clicked route component, ensure responsiveness on mobile, and implement the component for youth ministry, woman’s and men’s fellowship, evagelism
        <Link to="/contact" className="mx-2">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
