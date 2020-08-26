import React from 'react';
import Cbs from '../CBS/Cbs';
import AccountName from '../AccountName/AccountName';
import Resources from '../Resources/Resources';

const Statistics = (props) => {
    return(
        <div style={{transition: 'all 1s ease-in-out',opacity: props.statisticOpacity}}>
            <AccountName /> 
            <Cbs cbsOpacity={props.cbsOpacity} data={props.cbs}/>
            <Cbs cbsOpacity={props.cbsOpacity} data={props.cbsch}/>
            <Resources 
                resourcesOpacity={props.resourcesOpacity}
                RAM={props.RAM}
                CPU={props.CPU}
                NET={props.NET} 
            />
        </div>
    )
}

export default Statistics;