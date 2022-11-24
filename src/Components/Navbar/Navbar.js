import { useState } from "react";
import darkLogo from "../../images/logo-dark.svg";
import menuIcon from "../../images/menu-icon.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Product" },
    { id: 3, name: "About" },
    { id: 4, name: "Contact" },
  ];
  return (
    <nav className="navbar">
      <div className="left-logo">
        <img className="nav-logo" src={darkLogo}></img>
      </div>

      <div className={`nav-menu  ${isNavExpanded && "expanded"}`}>
        {navItems.map((item) => (
          <li className="nav-items">
            <a className="nav-link " href="#">
              {item.name}
            </a>
          </li>
        ))}
      </div>

      <div
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        className="menu-icon"
      >
        <img src={menuIcon}></img>
      </div>

      <button className="nav-btn">Login</button>
    </nav>
  );
};

export default Navbar;
