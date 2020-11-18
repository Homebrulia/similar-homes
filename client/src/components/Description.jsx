import React from 'react';
import './Description.css';

const Description = ({ listing, id }) => (
  <ul className="description">
    <li className="price"> {listing.price} </li>
    {/* <li> {} </li> */}
  </ul>
)

export default Description;
