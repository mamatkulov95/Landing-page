import { useState } from "react";
import darkLogo from "../../images/logo-dark.svg";
import menuIcon from "../../images/menu-icon.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const navItems = [
    { id: 1, name: "Home" },
    { id: 1, name: "Product" },
    { id: 1, name: "About" },
    { id: 1, name: "Contact" },
  ];
  return (
    <nav className="navbar">
      <div className="left-logo">
        <img className="nav-logo" src={darkLogo}></img>
      </div>

      <div
        className={
          isNavExpanded
            ? "nav-menus expanded" && "nav-items expanded"
            : "nav-menus"
        }
      >
        <ul className="nav-menus expanded">
          {navItems.map((item) => (
            <li className="nav-items expanded">
              <a className="nav-link" href="#">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        className="menu-logo"
      >
        <img src={menuIcon}></img>
      </div>

      <button className="nav-btn">Login</button>
    </nav>
  );
};

export default Navbar;
