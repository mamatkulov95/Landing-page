import "./Partners.css";
import partners from "./Icons";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners-header">
        <h1 className="partners-title">Partners</h1>
        <p className="partners-content">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div className="partners-icons">
        {partners.map((item) => (
          <img className="icon-imgs" src={item.Photo}></img>
        ))}
      </div>

      <div className="partners-btns">
        <button className="partners-button">
          <span className="partners-btn-text">All Partners</span>
        </button>
      </div>
    </div>
  );
};

export default Partners;
