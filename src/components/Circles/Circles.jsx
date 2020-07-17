import React from 'react';
import './Circles.css';

const Circles = (props) => (
  <div className='Circles'>
      <div className={props.currentSelection === 1 ? 'selected' : ''}>1</div>
      <div className={props.currentSelection === 2 ? 'selected' : ''}>2</div>
      <div className={props.currentSelection === 3 ? 'selected' : ''}>3</div>
      <div className={props.currentSelection === 4 ? 'selected' : ''}>4</div>
  </div>
);

export default Circles;