import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./Testimonials.css"; // Import your CSS file

const testimonialList = [
  [
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      rating: 3.5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Raima Sen",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Arjun Kapur",
      rating: 4.5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."
    }
  ],
  [
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Arjun Kapur",
      rating: 4.5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Raima Sen",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      rating: 3.5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."
    }
  ]
];


const Rating = ({ rating, showLabel }) => (
  <p className="testimonial-rating">
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />;
        else if (rating > i && rating < index + 1)
          content = <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />;
        else if (index > rating)
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-200" />;

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
};

const TestimonialItem = ({ item }) => {
  const { rating, content, photo, name } = item;
  return (
    <div className="testimonial-item">
      <div>
        <Rating rating={rating} showLabel={false} />
        <p className="testimonial-content">{content}</p>
        <div className="testimonial-author">
          <img src={photo} alt={name} />
          <div>
            <h5 className="testimonial-author-name">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Testimonial20 = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="flex justify-between">
          <div className="testimonial-heading-container">
            <h2 className="testimonial-heading">What Our Clients Say</h2>
            <p className="testimonial-paragraph">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            </p>
          </div>
          <div className="testimonial-controls">
            <button className="testimonial-button" onClick={() => handleControl("prev")}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className="testimonial-button" onClick={() => handleControl("next")}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonialList[index].map((item, i) => (
            <div className="testimonial-item-wrapper" key={i}>
              <TestimonialItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial20;
