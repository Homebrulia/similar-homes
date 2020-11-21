import React from 'react';
import styles from './HeartButton.css';

const HeartButtonFilled = ({
  heartListing, id,
}) => (

  <button
    // type='submit'
    id={styles.heartbtn}
    onClick={() => heartListing()}
  >

    <img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/heartclicked.svg" />
  </button>

);

export default HeartButtonFilled;
