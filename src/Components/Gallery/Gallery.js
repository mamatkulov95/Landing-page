import photos from "./Images";
import "./Gallery.css";

const photoGallery = [
  {
    id: 1,
    Photo: require("../../images/pc-code.png"),
  },
  {
    id: 2,
    Photo: require("../../images/laptop.png"),
  },
  {
    id: 3,
    Photo: require("../../images/canon.png"),
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-content">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div className="gallery-img1">
        {photos.map((item) => (
          <img className="imgs" src={item.Photo}></img>
        ))}
      </div>

      <div className="gallery-img2">
        {photoGallery.map((item) => (
          <img className="imgs" src={item.Photo}></img>
        ))}
      </div>

      <div className="gallery-btn">
        <button className="gallery-button">
          <span className="gallery-btn-text">See more</span>
        </button>{" "}
      </div>
    </div>
  );
};

export default Gallery;
