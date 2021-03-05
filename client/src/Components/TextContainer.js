import React from 'react'

import '../Css/TextContainer.css';

export const TextContainer = ({users}) => {
    return (
        <div className="textContainer">
            {
                users ? (
                    <div>
                        <h2>{`People in the room: ${users.length}`}</h2>
                        <div>
                            <h3>
                                {users.map((user) => {
                                    return (
                                        <div key={user.name} className="activeItem">
                                            {user.name}
                                        </div>
                                    )
                                })}
                            </h3>
                        </div>
                    </div>
                ) : <h1>Loading...</h1>
            }
        </div>
    )
}