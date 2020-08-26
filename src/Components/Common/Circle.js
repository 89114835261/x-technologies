import React from 'react';
import style from './Circle.module.scss';

const Circle = (props) => {
    return(
        <svg width="50px" height="50px" viewBox="0 0 42 42" class={style.circle}>
        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke={props.colorTwo} stroke-width="5"></circle>
        <circle className={style.completion} cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke={props.colorOne} stroke-width="6" stroke-dasharray={`${props.number} ${100 - props.number}`} stroke-dashoffset="25"></circle>
    </svg>
    )
}

export default Circle;