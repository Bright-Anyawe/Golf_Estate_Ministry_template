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
    <header className="bg-gray-800 text-white top-0 h-24 flex flex-col w-full fixed z-50">
      <section className="mainNav">
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
      </section>

      {/* Announcement Alert Section */}
      <section className="alertSection bg-yellow-500 p-2">
        <AnnouncementAlert />
      </section>
    </header>
  );
};

export default Header;
