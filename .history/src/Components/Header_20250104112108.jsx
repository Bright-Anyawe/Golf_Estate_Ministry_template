import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnnouncementAlert } from "./Alert";

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
      <section>
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
                {link.label}
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
        <div
          className={`md:hidden fixed inset-0 bg-gray-800 z-40 transform transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 py-8 bg-gray-800">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
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
            ))}
          </nav>
        </div>
      </section>
      <section className="alertSection">
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
                {link.label}
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
        <div
          className={`md:hidden fixed inset-0 bg-gray-800 z-40 transform transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 py-8 bg-gray-800">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
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
            ))}
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
