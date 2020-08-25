import React from 'react';
import Cbs from '../CBS/Cbs';
import AccountName from '../AccountName/AccountName';
import Resources from '../Resources/Resources';

const Statistics = (props) => {
    return(
        <div>
            <AccountName /> 
            <Cbs data={props.cbs}/>
            <Cbs data={props.cbsch}/>
            <Resources 
                RAM={props.RAM}
                CPU={props.CPU}
                NET={props.NET} 
            />
        </div>
    )
}

export default Statistics;