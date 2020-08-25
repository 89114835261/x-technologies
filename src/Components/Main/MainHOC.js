import React from 'react';
import Main from './Main';
import Axios from 'axios';

class MainHOC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cbs: null,
            cbsch: null,
            transactions: null,
            RAM: '43.20',
            CPU: '76.20',
            NET: '100.00'
        }
    }

    changeTabsTransactions = (array, state, func) => {
        const result = array.map((item, i) => 
           <span key={i} onClick={() => func(item)} className={state === item ? 'active' : ' '}>{item}</span>
       )
       return result;
   }

   elementTransactions = (event, value = 'All', style) => {
       if(value === event.currency || value === 'All')
        return <div key={event.id} className={style.element}>
           <span className={event.in ? style.in : style.out}></span>
           <span>{event.date} <p className={style.time}>&bull; {event.time}</p></span>
           <span><img src={event.photo}/>{event.name}</span>
           <span className={event.currency === 'CBS' ? 'cbs' : ' '}><p className={event.in ? 'in' : 'out'}>{event.in ? '+ ' : '- '} {event.balance} </p>{event.currency}</span>
           </div>
   }

   sortTransactions = (item, parameter = true, value = true, value2 = null, func, style) => {
       if(parameter === value) {
               if(value2 === 'CBS') return func(item, value2, style)
               else if(value2 === 'CBSCH') return func(item, value2, style)
               else return func(item, 'All', style)
           }
       }

    componentDidMount() {
        Axios.get('/cbs.json').then(response => this.setState({cbs: response.data}));
        Axios.get('/cbsch.json').then(response => this.setState({cbsch: response.data}));
        Axios.get('/Transactions.json').then(response => this.setState({transactions: response.data}))
    }
    render() {
        if(this.state.cbs && this.state.cbsch && this.state.transactions) {
            return(
                <Main 
                changeTabsTransactions={this.changeTabsTransactions}
                elementTransactions={this.elementTransactions}
                sortTransactions={this.sortTransactions}
                RAM={this.state.RAM}
                CPU={this.state.CPU}
                NET={this.state.NET}
                transactions={this.state.transactions}
                cbs={this.state.cbs}
                cbsch={this.state.cbsch}/>
            )
        } else return ' ';

    }
}

export default MainHOC;