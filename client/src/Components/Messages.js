import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import { Message } from './Message.js';

import '../Css/Messages.css';

export const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) =>
                <div key={i}>
                    <Message message={message} name={name} />
                </div>
            )}
        </ScrollToBottom>
    )
}