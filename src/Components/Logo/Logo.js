import React from 'react';
import style from './Logo.module.scss';

const Logo = (props) => {
    return(
        <div className={style.wrapper}>
            <div>
                <h1><span>cbs</span>one</h1>
            </div>
        </div>
    )
}

export default Logo;