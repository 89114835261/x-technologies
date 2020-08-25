import React from 'react';
import style from './Menu.module.scss';

const Menu = (props) => {
    return(
        <ul>
            <li><span>Wallet</span></li>
            <li><span>Staked</span></li>
            <li><span>Ambasdors</span></li>
            <li><span>Followers</span></li>
        </ul>
    )
}

export default Menu;