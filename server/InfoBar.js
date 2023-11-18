import React from 'react';

const InfoBar = () => {
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image" />
            <h3>Room Name</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/" ><img src={closeIcon} alt="close image" /></a>
        </div>
    </div>
}
export default InfoBar;