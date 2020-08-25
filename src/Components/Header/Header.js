import React, { useState } from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';
import AccountNameH from './AccountNameHeader/AccountNameH';
import AccountMenu from '../AccountMenu/AccountMenu';

const Header = (props) => {
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    const changeOpenMenu = (boolean) => {
        setIsOpenMenu(boolean)
    }

    return(
        <div className={style.header}>
            <Logo />
            <AccountNameH isOpenMenu={isOpenMenu} changeOpenMenu={changeOpenMenu}/>
        </div>
    )
}

export default Header;