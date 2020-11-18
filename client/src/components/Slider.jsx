import React from 'react';
import './Slider.scss';
import Description from './Description.jsx';

function Slider({ listings }) {
  return (
    <div className="slider">
      {listings.map((listing, index) => (
        <div key={index} className="slide">
          <div className="image">
            <img src={listing.image} />
          </div>
          <Description id={listing.id} listing={listing} />
        </div>
      ))}
    </div>
  );
}

export default Slider;
