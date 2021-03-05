import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Join.css';

export const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Chat</h1>
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

        </div>
    )
}

