import { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className="links-container show-container">
            <ul className="links">
              {links.map((l) => (
                <li key={l.id}>
                  <a href="#">{l.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ul className="social-icons">
          {social.map((s) => (
            <li key={s.id}>
              <a href={s.url}>{s.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
