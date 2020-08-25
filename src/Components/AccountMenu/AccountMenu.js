import React from 'react';
import style from './AccountMenu.module.scss';
import copy from './../../img/icons/copy.jpg';

const AccountMenu = (props) => {
    return(
        <div className={style.menu}>
            <h4>Account name</h4>
            <span className={style.cash}>85hr6aor91sjfu72u2ufhar...<img src={copy} /></span>
            <ul>
                <li><span>Set key</span></li>
                <li><span>Set pin-code</span></li>
                <li><span>Log out</span></li>
            </ul>
        </div>
    )
}

export default AccountMenu;