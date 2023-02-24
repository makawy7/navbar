import { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const containerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHight = linksRef.current.getBoundingClientRect().height;
    containerRef.current.style.height = showLinks ? `${linksHight}px` : "0px";
  }, [showLinks]);

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

        <div className="links-container" ref={containerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((l) => (
              <li key={l.id}>
                <a href="#">{l.text}</a>
              </li>
            ))}
          </ul>
        </div>

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
