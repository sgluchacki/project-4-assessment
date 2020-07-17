import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
    <div className='CircleSelector'>
        <button
            onClick={() => props.handleClick(1)}
            className={props.currentSelection === 1 ? 'selected' : ''}
        >Select Circle 1</button>
        <button
            onClick={() => props.handleClick(2)}
            className={props.currentSelection === 2 ? 'selected' : ''}
        >Select Circle 2</button>
        <button
            onClick={() => props.handleClick(3)}
            className={props.currentSelection === 3 ? 'selected' : ''}
        >Select Circle 3</button>
        <button
            onClick={() => props.handleClick(4)}
            className={props.currentSelection === 4 ? 'selected' : ''}
        >Select Circle 4</button>
    </div>
);

export default CircleSelector;