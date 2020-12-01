import React from 'react';
import styles from './TakeALook.scss';


const TakeALook = (props) => (
  <div className={`${styles.slide}`} style={{ transform: `translateX(${props.x}%)` }}>
    <img src="https://s3-us-west-1.amazonaws.com/fec.similarhomes/FEC+pictures/takealook.jpg" />
  </div>
);

export default TakeALook;
