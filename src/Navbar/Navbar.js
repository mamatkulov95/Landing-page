import darkLogo from "../images/logo-dark.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="nav-logo" src={darkLogo}></img>
      <ul className="nav-menus">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <btn className="nav-btn">Login</btn>
    </nav>
  );
};

export default Navbar;
