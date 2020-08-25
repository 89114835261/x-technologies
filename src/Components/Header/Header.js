import React from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';

const Header = (props) => {
    return(
        <div className={style.header}>
            <Logo />
        </div>
    )
}

export default Header;