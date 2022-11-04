import ContentCards from "./ContentCards";
import data from "./Content7Data";
import "./Content7.css";

const Content7 = () => {
  const cards = data.map((item) => {
    return <ContentCards key={item.id} {...item} />;
  });
  return (
    <div className="content7">
      <div className="content7-header">
        <h2 className="content7-title">Contents</h2>
        <p className="content7-description">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="content7-cards-wrapper">{cards}</div>
    </div>
  );
};

export default Content7;
