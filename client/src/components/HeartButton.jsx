/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styles from './HeartButton.css';

const HeartButton = ({
  heartListing, id,
}) => (

  <button
    id={styles.heartbtn}
    onClick={() => heartListing()}
  >
    <img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/heartunclicked.svg" />
  </button>

);

export default HeartButton;
