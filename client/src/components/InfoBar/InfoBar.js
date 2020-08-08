import React from 'react';

import './InfoBar.css'

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerConatiner">
            <img className="onlineIcon" src={onlineIcon} alt="online" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerConatiner">
            <a href="/"><img src={closeIcon} className="oncloseIcon" alt="close" /></a>
        </div>
    </div>
)

export default InfoBar;