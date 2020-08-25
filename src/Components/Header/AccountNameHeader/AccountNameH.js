import React, { useState } from 'react';
import style from './AccountNameH.module.scss';
import AccountMenu from '../../AccountMenu/AccountMenu';

const AccountNameH = (props) => {
    return(
        <div onMouseOver={() => props.changeOpenMenu(true)} onMouseLeave={() => props.changeOpenMenu(false)} className={style.accountName}>
            <span className={style.name}>Account name</span>
            {props.isOpenMenu && <AccountMenu />}
        </div>
    )
}

export default AccountNameH;