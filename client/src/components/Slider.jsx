import React from 'react';
import css from './Slider.scss';
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
      <button className="goLeft"><img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/larrow.svg" /></button>
      <button className="goRight"><img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/rarrow.svg" /></button>
    </div>
  );
}

export default Slider;
