import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 top-0  fixed flex justify-center items-center w-screen h-20 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className=" font-bold text-xl">
          Golf Estate Assembly(C.O.P)
        </NavLink>

        <nav className="flex items-center text-xl">
          <NavLink to="/" className="mx-2 hover:text-blue-400">
            Home
          </NavLink>
          <NavLink to="/announcement" className="mx-2 hover:text-blue-400">
            Announcement
          </NavLink>
          <NavLink to="/aboutUs" className="mx-2 hover:text-blue-400">
            About
          </NavLink>
          <NavLink to="/sermons" className="mx-2 hover:text-blue-400" activeClassName="text-red-500" >
            Sermons & Bible studies
          </NavLink>
          <NavLink to="/event" className="mx-2">
            Events
          </NavLink>

          <div
            className="relative mx-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <NavLink className="focus:outline-none">Ministries</NavLink>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-gray-700 text-white rounded shadow-md mt-2">
                <Link
                  to="/ministries/youth"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Youth Ministry
                </Link>
                <Link
                  to="/ministries/women"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Women’s Fellowship
                </Link>
                <Link
                  to="/ministries/men"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Men’s Fellowship
                </Link>
                <Link
                  to="/ministries/evangelism"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Evangelism
                </Link>
                <Link
                  to="/ministries/choir"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Choir Ministry
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="mx-2">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
