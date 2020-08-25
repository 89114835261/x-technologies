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
    componentDidMount() {
        Axios.get('/cbs.json').then(response => this.setState({cbs: response.data}));
        Axios.get('/cbsch.json').then(response => this.setState({cbsch: response.data}));
        Axios.get('/Transactions.json').then(response => this.setState({transactions: response.data}))
    }
    render() {
        if(this.state.cbs && this.state.cbsch && this.state.transactions) {
            return(
                <Main 
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