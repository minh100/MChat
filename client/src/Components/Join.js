import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SocketContext } from '../Socket.js';
import '../Css/Join.css';

import MChatLogo from '../MChatLogo.png';

export const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [roomList, setRoomList] = useState([]);

    const socket = useContext(SocketContext);   // socket instance

    // used to render the lobby and show number of rooms    
    // important for refreshing or when client leaves room 
    useEffect(() => {
        socket.emit('joinLobby');

        return () => {
            socket.off('joinLobby');
        }
    }, [socket])


    // used to update list of rooms
    useEffect(() => {
        socket.on('lobby', (roomArray) => {
            setRoomList(roomArray);
        })

        return () => {
            socket.off('lobby');
        }
    }, [roomList, socket])

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading"><img id="logo" src={MChatLogo} alt="MChat" /></h1>
                <input
                    placeholder="Name"
                    className="joinInput"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    placeholder="Room"
                    className="joinInput mt-20"
                    type="text"
                    onChange={(event) => setRoom(event.target.value)}
                />
                <Link onClick={(event) => (!name || !room ? event.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Join</button>
                </Link>
            </div>
            <div className="room-list-container">
                <h1 className="heading2">{`Rooms in Session: ${roomList.length}`}</h1>
                <div className="room-list">
                    <div className="room-list-column">
                        <h3 className="room-name-heading">Room Name:</h3>
                        {
                            roomList.length !== 0 ?
                                (
                                    <>
                                        {
                                            roomList.map(room =>
                                                <div className="display-room-name" key={room.roomName}>
                                                    {room.roomName}
                                                </div>
                                            )
                                        }
                                    </>
                                ) : ""
                        }
                    </div>
                    <div className="room-list-column">
                        <h3 className="room-count-heading">Users in Room:</h3>
                        {
                            roomList.length !== 0 ?
                                (
                                    <>
                                        {
                                            roomList.map(room =>
                                                <div className="display-room-count" key={room.roomName + room.numberOfPeople}>
                                                    {room.numberOfPeople}
                                                </div>
                                            )
                                        }
                                    </>
                                ) : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

