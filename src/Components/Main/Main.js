import React from 'react';
import style from './Main.module.scss';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Transactions from '../Transactions/Transactions';
import Statistics from '../Statistics/Statistics';

const Main = (props) => {
    
    return(
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.wrapper}>
                    <Header />
                </div>
            </div>
                <div className={style.contentWrapper}>
                    <div className={style.leftSide}>
                        <Menu />
                    </div>
                    <div className={style.content}>
                        <Statistics 
                        RAM={props.RAM}
                        CPU={props.CPU}
                        NET={props.NET} 
                        cbsch={props.cbsch} 
                        cbs={props.cbs}/>
                        <Transactions 
                        changeTabsTransactions={props.changeTabsTransactions}
                        elementTransactions={props.elementTransactions}
                        sortTransactions={props.sortTransactions}
                        transactions={props.transactions}/>
                    </div>
                </div>
            <div className={style.footer}></div>
        </div>
        
    )
}

export default Main;