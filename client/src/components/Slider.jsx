import React, { useState } from 'react';
import styles from './Slider.scss';
import Description from './Description.jsx';

function Slider({ listings }) {
  // declare state variables using array destructuring
  const [x, setX] = useState(0);
  const [noLeftButton, setNoLeftButton] = useState(true);
  const [noRightButton, setNoRightButton] = useState(false);
  const goLeft = () => {
    // prevent scrolling past first flexbox item and hide left button if in beginning of slider
    // if left button is ever clicked, show right button
    setNoRightButton(false);
    (x === 0) ? null : setX(x + 400);
    (x === -400) ? setNoLeftButton(true) : null;
  };
  const goRight = () => {
    // console.log(x);
    // prevent scrolling past last flexbox item and hide right button if at the end of slider
    // if right button is ever clicked, show left button
    setNoLeftButton(false);
    setX(x - 400);
    (x === -100 * ((listings.length - 1) / 2)) ? setNoRightButton(true) : null;
  };
  return (
    <>
      <div className={styles.slider}>
        {listings.map((listing, index) => (
          <div key={index} className={styles.slide} style={{ transform: `translateX(${x}%)` }}>
            <div className={styles.image}>
              <img src={listing.image} />
            </div>
            <Description id={listing.id} listing={listing} />
          </div>
        ))}
      { noLeftButton ? null : <button className={styles.goLeft} onClick={goLeft}><img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/larrow.svg" /></button>}
      { noRightButton ? null : <button className={styles.goRight} onClick={goRight}><img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/rarrow.svg" /></button>}
      </div>
    </>
  );
}

export default Slider;
