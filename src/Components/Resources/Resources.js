import React from 'react';
import style from './Resources.module.scss';
import Circle from '../Common/Circle';

const Resources = (props) => {
    return(
        <div className={style.resources}>
            <h4>Resources</h4>
            <div className={style.wrapper}>
                <span className={style.name}>RAM</span>
                <Circle colorOne='#27AE60' colorTwo='#EBEBEA' number={props.RAM} />
                <div className={style.statistic}>
                    <p style={{opacity: props.resourcesOpacity}}>{props.RAM}%</p>
                    <span>30.73 MB / 43.65 MB</span>
                </div>
            </div>
            <div className={style.wrapper}>
                <span className={style.name}>CPU</span>
                <Circle colorOne='#EB5757' colorTwo='#EBEBEA' number={props.CPU} />
                <div className={style.statistic}>
                    <p style={{opacity: props.resourcesOpacity}}>{props.CPU}%</p>
                    <span>&infin; &micro;s / &infin; &micro;s</span>
                </div>
            </div>
            <div className={style.wrapper}>
                <span className={style.name}>NET</span>
                <Circle colorOne='#2FA7E3' colorTwo='#EBEBEA' number={props.NET} />
                <div className={style.statistic}>
                    <p style={{opacity: props.resourcesOpacity}}>{props.NET}%</p>
                    <span>&infin; &#181;s / &infin; &micro;s</span>
                </div>
            </div>
        </div>
    )
}

export default Resources;