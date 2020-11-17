import React from 'react';
import './Slider.scss';

function Slider({ listings }) {
  return (
    <div className="slider">
      {listings.map((listing, index) => {
        return (
          <div key={index} className="slide">
            <img src={listing.image} />
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
