import persons from "./TestimonialData";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <h1 className="testimonial-title">Testimonials</h1>
      </div>

      <div className="testimonial-content">
        {persons.map(({ id, avatar, person, jobTitle, describtion }, item) => (
          <div className="testimonial-users" key={item}>
            <div className="testimonial-heading">
              <img
                className="testimonial-avatar"
                src={avatar}
                alt="avatar"
              ></img>

              <div className="testimonial-subheading">
                <p className="testimonial-person"> {person}</p>
                <p className="testimonial-position">{jobTitle}</p>
              </div>
            </div>
            <p className="testimonial-description">{describtion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
