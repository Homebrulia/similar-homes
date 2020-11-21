/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import styles from './Slider.scss';
import Slide from './Slide.jsx';
import TakeALook from './TakeALook.jsx';

function Slider({ listings }) {
  // declare state variables using array destructuring
  const [x, setX] = useState(0);
  const [noLeftButton, setNoLeftButton] = useState(true);
  const [noRightButton, setNoRightButton] = useState(false);

  const goLeft = () => {
    // if left button is ever clicked, show right button
    setNoRightButton(false);
    // prevent scrolling past first flexbox item and hide left button if in beginning of slider
    (x === 0) ? null : setX(x + 400);
    (x === -400) ? setNoLeftButton(true) : null;
  };

  const goRight = () => {
    // if right button is ever clicked, show left button
    setNoLeftButton(false);
    setX(x - 400);
    // prevent scrolling past last flexbox item and hide right button if at the end of slider
    (x === -100 * ((listings.length - 1) / 2)) ? setNoRightButton(true) : null;
  };

  return (
    <div className={styles.outer}>
      <div className={styles.slider}>
        {listings.map((listing, index) => (
          <Slide key={index} id={index} listing={listing} x={x} />
        ))}
          <TakeALook />
        {noLeftButton ? null : <button className={styles.goLeft} onClick={goLeft}><img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/larrow.svg" /></button>}
        {noRightButton ? null : <button className={styles.goRight} onClick={goRight}><img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/rarrow.svg" /></button>}
      </div>
    </div>
  );
}

export default Slider;
