import React from 'react';
import style from './Transactions.module.scss';

const Transactions = (props) => {
    const transactions = props.transactions.map(item => {
        return <div key={item.id} className={style.element}>
            <span className={item.in ? style.in : style.out}></span>
            <span>{item.date} &bull; {item.time}</span>
            <span>{item.name}</span>
            <span>{item.in ? '+ ' : '- '} {item.balance}</span>
        </div>
    })

    return(
        <div className={style.wrapper}>
            <h3>Transactions</h3>
           
                <div className={style.menu}>
                    <span>All</span>
                    <span>In</span>
                    <span>Out</span>
                    <span>All</span>
                    <span>CBS</span>
                    <span>CBSCH</span>
                </div>
                <div className={style.transactions}>
                    <div className={style.listTitle}>
                        <span>Rank</span>
                        <span>Date &bull; Time</span>
                        <span>Name</span>
                        <span>Balance</span>
                    </div>
                    {transactions}
                </div>  
             
        </div>     
    )
}

export default Transactions;