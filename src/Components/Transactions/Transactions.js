import React, { useState } from 'react';
import style from './Transactions.module.scss';
import './Transactions.css';

const Transactions = (props) => {
    const [ tabInOut, setTabInOut ] = useState('All');
    const [ tabCurrency, setTabCurrency ] = useState('All');

    const tabInOutArray = ['All', 'In', 'Out'];
    const tabCurrencyArray = ['All', 'CBS', 'CBSCH'];

    const transactions = props.transactions.map(item => {
        if(tabInOut === 'In') return props.sortTransactions(item, item.in, true, tabCurrency, props.elementTransactions, style)
        else if(tabInOut === 'Out') return props.sortTransactions(item, item.in, false, tabCurrency, props.elementTransactions, style)
        else return props.sortTransactions(item, true, true, tabCurrency, props.elementTransactions, style)
    })

    return(
        <div className={style.wrapper} style={{opacity: props.transactionsOpacity}}>
            <h3>Transactions</h3>
           
                <div className={style.menu}>
                    {props.changeTabsTransactions(tabInOutArray, tabInOut, setTabInOut)}
                    {props.changeTabsTransactions(tabCurrencyArray, tabCurrency, setTabCurrency)}
                </div>
                <div className={style.transactions}>
                    <div className={style.listTitle}>
                        <span>Rank</span>
                        <span>Date &bull; Time</span>
                        <span>Name</span>
                        <span>Balance</span>
                    </div>
                    {transactions}
                    <div className={style.pagination}>
                        <span>&#60;</span>
                        <span>1,</span>
                        <span>2,</span>
                        <span>3,</span>
                        <span>...</span>
                        <span>156</span>
                        <span>&#62;</span>
                    </div>
                </div>  
             
        </div>     
    )
}

export default Transactions;