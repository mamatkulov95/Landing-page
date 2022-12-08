import photos from "./Images";
import pcIcon from "../../images/pc-code.png";
import laptopIcon from "../../images/laptop.png";
import canonIcon from "../../images/canon.png";
import "./Gallery.css";

const photoGallery = [
  {
    id: 1,
    Photo: pcIcon,
  },
  {
    id: 2,
    Photo: laptopIcon,
  },
  {
    id: 3,
    Photo: canonIcon,
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
          <div className="img-wrapper">
            <img className="imgs" src={item.Photo}></img>
          </div>
        ))}
      </div>

      <div className="gallery-img2">
        {photoGallery.map((item) => (
          <div className="img-wrapper2">
            <img className="imgs" src={item.Photo}></img>
          </div>
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
