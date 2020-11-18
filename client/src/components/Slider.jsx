import React from 'react';
import styles from './Slider.scss';
import Description from './Description.jsx';

function Slider({ listings }) {
  return (
    <div className={styles.slider}>
      {listings.map((listing, index) => (
        <div key={index} className={styles.slide}>
          <div className={styles.image}>
            <img src={listing.image} />
          </div>
          <Description id={listing.id} listing={listing} />
        </div>
      ))}
      <button className={styles.goLeft}><img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/larrow.svg" /></button>
      <button className={styles.goRight}><img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/rarrow.svg" /></button>
    </div>
  );
}

export default Slider;
