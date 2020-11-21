import React from 'react';
import styles from './Description.css';

const Description = ({ listing, id }) => (
  <ul className={styles.description}>
    <li className={styles.price}> ${listing.price} </li>

    <li> <img className={styles.avatar} src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/bd.svg" /> {listing.size_bd}bd <img className={styles.avatar} src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/ba.svg" /> {listing.size_ba}ba <img className={styles.avatar} src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/sqft.svg" /> {listing.size_sqft}sqft </li>

    <li> {listing.address} </li>

    <li className={styles.neighborhood}> {listing.neighborhood} </li>
  </ul>
)

export default Description;
