import "./Features.css";

function TextBlock(props) {
  return (
    <div className="text-block-wrapper">
      <div className="content-textblock">
        <div className="text-block-header">
          <img src={props.logo} className="text-block-icon" />
          <p className="text-block-title">{props.title}</p>
        </div>
        <p className="text-block-description">{props.description}</p>
      </div>
    </div>
  );
}

export default TextBlock;
