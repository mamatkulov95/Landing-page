import screenImg from "../../images/screens.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-header">Work at the speed of thought</h1>
        <p className="hero-header-description">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>

      <div className="hero-btns">
        <button className="hero-btn left">Try For Free</button>
        <button className="hero-btn right">Learn More</button>
      </div>

      <img className="hero-screen" alt="hero-screen" src={screenImg}></img>
    </div>
  );
};

export default Hero;
