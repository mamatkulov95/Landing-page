import data from "./ClientData";
import "./ClientPage.css";

const ClientPage = () => {
  return (
    <div className="content">
      <div className="content-header">
        <h2 className="content-title">Contents</h2>
        <p className="content-description">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="client-cards-wrapper">
        {data.map(({ title, description, btn, logo }, item) => {
          return (
            <div className="client-cards" key={item}>
              <div className="client-cards-heading">
                <h2 className="client-cards-title">{title}</h2>
                <p className="client-cards-description">{description}</p>
              </div>
              <button className="client-cards-btn">{btn}</button>
              <img className="client-cards-img" src={logo}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientPage;
