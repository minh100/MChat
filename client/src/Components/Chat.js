import React, { useState, useEffect, useContext } from 'react'
import queryString from 'query-string';
import { SocketContext } from '../Socket.js';

import { Infobar } from './Infobar.js';
import { Input } from './Input.js';
import { Messages } from './Messages.js';
import { TextContainer } from './TextContainer.js';

import '../Css/Chat.css';

export const Chat = ({ location }) => {
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState("");

    const socket = useContext(SocketContext); // socket instance

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);  // parses the url
        setName(name);  // sets client's name
        setRoom(room);  // sets client's room

        // emits to server if an error appeared
        socket.emit('join', { name, room }, (error) => {
            if (error) alert(error);
        })

        return () => {
            socket.off('join');
        }

    }, [location.search, socket])

    useEffect(() => {
        // updates messages to include the new message
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        // updates the room to include new user
        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });

        return () => {
            socket.off('message');
            socket.off('roomData');
        };
    }, [messages, socket]);

    const sendMessage = (event) => {
        event.preventDefault();

        // resets the message input after sending it to server
        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage('');
            })
        }
    }

    return (
        <div className="outerContainer">
            <TextContainer className="container-column" users={users} />
            <div className="container-column" id="container">
                <Infobar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

