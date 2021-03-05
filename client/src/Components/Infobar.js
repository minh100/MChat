import React from 'react';
import '../Css/Infobar.css';

export const Infobar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <h3>Code: {room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/MChat">Leave Room</a>
            </div>
        </div>
    )
}
