import React from 'react';
import style from './AccountName.module.scss';
import copy from './../../img/icons/copy.jpg';
import connect from './../../img/icons/connect.jpg';

const AccountName = (props) => {
    return(
        <div className={style.account}>
            <span>by <span>makeaccounts</span> 2 hours ago<img src={connect} /></span>
            <p>Long account name <img src={copy} /></p>
        </div>
    )
}

export default AccountName;