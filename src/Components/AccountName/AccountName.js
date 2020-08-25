import React from 'react';
import style from './AccountName.module.scss';

const AccountName = (props) => {
    return(
        <div className={style.account}>
            <span>by <span>makeaccounts</span> 2 hours ago</span>
            <p>Long account name</p>
        </div>
    )
}

export default AccountName;