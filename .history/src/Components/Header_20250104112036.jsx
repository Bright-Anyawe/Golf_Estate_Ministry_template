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
    s
    </header>
  );
};

export default Header;
