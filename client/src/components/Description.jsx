import React from 'react';
import './Description.css';

const Description = ({ listing, id }) => (
  <ul className="description">
    <li className="price"> ${listing.price} </li>

    <li> <img className="avatar" src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/bd.svg" /> {listing.size_bd}bd <img className="avatar" src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/ba.svg" /> {listing.size_ba}ba <img className="avatar" src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+avatars/sqft.svg" /> {listing.size_sqft}sqft </li>

    <li> {listing.address} </li>

    <li> {listing.neighborhood} </li>
  </ul>
)

export default Description;
