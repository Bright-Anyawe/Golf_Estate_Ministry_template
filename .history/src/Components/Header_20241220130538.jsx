import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 fixed justify-center item w-screen h-20 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          Golf Estate Assembly(C.O.P)
        </Link>

        <nav className="flex items-center">
          <Link to="/" className="mx-2">
            Home
          </Link>
          <Link to="/aboutUs" className="mx-2">
            About
          </Link>
          <Link to="/sermons" className="mx-2">
            Sermons
          </Link>
          <Link to="/events" className="mx-2">
            Events
          </Link>

          {/* Ministries Dropdown */}
          <div
            className="relative mx-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="focus:outline-none">Ministries</button>
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
