import data from "./FeaturesData";
import chatBot from "../../images/chat-bot.svg";
import lineCHart from "../../images/line-chart.svg";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="features-heading">
        <h1 className="features-heading-title">FEATURES</h1>
        <p className="features-heading-description">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="features-content">
        <div className="content-frame">
          <img className="frame-chatbot" src={chatBot} />
          <img className="frame-lineChart" src={lineCHart} />
        </div>

        <div className="text-block-wrapper">
          {data.map(({ logo, title, description }, item) => (
            <div className="content-textblock" key={item}>
              <div className="text-block-header">
                <img src={logo} className="text-block-icon" />
                <p className="text-block-title">{title}</p>
              </div>
              <p className="text-block-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
