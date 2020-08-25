import React from 'react';
import style from './Cbs.module.scss';
import './Cbs.css';

const Cbs = (props) => {
    return(
        <div className={style.cbs}>
            <h3>{props.data.count} <span>{props.data.name}</span></h3>
            <div className={props.data.name}></div>
            {props.data.lockedCount && <div className='lockInfo'>
                <span>{props.data.lockedCount}</span>&bull;<span>{props.data.unLockedCount}</span>    
            </div>}
        </div>
    )
}

export default Cbs;