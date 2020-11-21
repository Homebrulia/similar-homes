import React from 'react';
import styles from './HeartButton.css';

const HeartButtonFilled = ({
  listing, id, saveListing, savedListing, changeImage,
}) => (

  <button
    // type='submit'
    id={styles.heartbtn}
    onClick={(event) => saveListing(event)}
  >

    <img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/heartclicked.svg" />
  </button>

);

export default HeartButtonFilled;
