import Hamburger from "hamburger-react";
import "./Footer.css";
import { useState } from "react";
import twitter from "../../images/twitter.png";
import fc from "../../images/fc.png";
import linkedn from "../../images/linkedn.svg";
import location from "../../images/location.svg";
import phone from "../../images/phone.svg";

const title = [
  {
    id: 1,
    heading: "Fingertype",
  },
  {
    id: 2,
    heading: "Resources",
  },
  {
    id: 1,
    heading: "About",
  },
];

const menus = [
  { id: 1, menu: "Home" },
  { id: 2, menu: "Examples" },
  { id: 3, menu: "Pricing" },
  { id: 4, menu: "Updates" },
];

const Footer = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="footer">
      <div className="footer-left-nav">
        {title.map((index) => (
          <div className="footer-nav" key={index}>
            <p className="footer-nav-title">{index.heading}</p>
            <div className="footer-nav-menus">
              {menus.map((item) => (
                <ul className="footer-nav-list" key={item}>
                  <li className="footer-nav-items">{item.menu}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footer-right">
        <div className="footer-location">
          <img src={location}></img>
          <p className="footer-address">7480 Mockingbird Hill undefined </p>
        </div>
        <div className="footer-contact">
          <img src={phone}></img>
          <p className="contact-number">(239) 555-0108</p>
        </div>
        <div className="footer-social">
          <img
            className="footer-social-icons"
            src={twitter}
            alt="twitter-icon"
          ></img>
          <img
            className="footer-social-icons"
            src={fc}
            alt="facebook-icon"
          ></img>
          <img
            className="footer-social-icons"
            src={linkedn}
            alt="linkedn-icon"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
