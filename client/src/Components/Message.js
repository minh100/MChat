import React from 'react';
import '../Css/Message.css';

export const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimName = name.trim().toLowerCase();

    // checks if the message is sent by the current user
    if(user === trimName) {
        isSentByCurrentUser = true;
    }

    // if message sent by current user display a blue background on the text
    // else display a white background to show the text sent by another user
    return (
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <p className="sendText pr-10">{trimName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorwhite">{text}</p>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                </div>
                <p className="sendText pl-10">{user}</p>
            </div>
        )
    )
}