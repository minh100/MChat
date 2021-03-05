const app = require('express')();
const socketio = require('socket.io');
const server = require('http').createServer(app);

const PORT = process.env.PORT || 4002;

const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const router = require('./router.js');
app.use(router);

// methods to deal with users
const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js');

io.on("connection", (socket) => {

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        
        // return an error if present
        if (error) {
            return callback(error);
        }

        socket.join(user.room); // joins the socket/client to the room

        // emits to client moving them to the rooms
        socket.emit('message', {
            user: 'admin',
            text: `${user.name} welcome to room ${user.room}`
        });

        // notifies the room and its participants that a user has joined
        socket.broadcast.to(user.room).emit('message', {
            user: 'admin',
            text: `${user.name} has joined`
        });

        // updates the room's list of participants
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUserInRoom(user.room)
        });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', ({ user: user.name, text: message }));
        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id); // removes user from room

        if (user) {
            // notifies the room and participant the user has left
            io.to(user.room).emit('message', {
                user: 'admin',
                text: `${user.name} has left`
            });

            // updates the list of participants in the room
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUserInRoom(user.room)
            })

        }
    });

})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
