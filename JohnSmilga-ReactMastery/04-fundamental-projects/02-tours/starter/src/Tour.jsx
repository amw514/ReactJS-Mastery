import React from "react";
import { useState } from "react";

function Tour({ id, image, info, name, price, removeTours }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}

          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>

        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTours(id)}
        >
          remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
