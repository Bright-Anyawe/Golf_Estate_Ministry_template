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
        
        <Link to="/contact" className="mx-2">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
