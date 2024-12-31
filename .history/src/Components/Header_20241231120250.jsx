import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/announcement", label: "Announcement" },
    { to: "/aboutUs", label: "About" },
    { to: "/sermons", label: "Sermons & Bible Studies" },
    { to: "/event", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-800 text-white top-0 h-24 flex fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="font-bold text-xl">
          Golf Estate Assembly (C.O.P)
        </NavLink>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-lg transition duration-300 ${
                  isActive ? "text-blue-500" : "text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`block h-0.5 bg-blue-500 absolute left-0 -bottom-1 transition-all duration-500 transform ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="relative w-10 h-8 flex flex-col justify-between items-center group"
          >
            <div
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul
            className="flex flex-col items-center space-y-4 py-4 bg-slate-800 p-5 justify-center animate-fade-in"
            style={{ animation: "fadeSlideIn 0.5s ease-in-out" }}
          >
            {navLinks.map((link) => (
              <li key={link.to} className="opacity-0 animate-fade-slide">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative text-lg transition duration-300 ${
                      isActive ? "text-blue-500" : "text-white"
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
