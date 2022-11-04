const ContentCards = (props) => {
  return (
    <div className="content7-cards">
      <div className="content7-cards-heading">
        <h2 className="content7-cards-title">{props.title}</h2>
        <p className="content7-cards-description">{props.description}</p>
      </div>
      <button className="content7-cards-btn">{props.btn}</button>
      <img className="content7-cards-img" src={props.logo}></img>
    </div>
  );
};

export default ContentCards;
