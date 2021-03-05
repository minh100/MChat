import { createContext } from 'react';
import io from 'socket.io-client';
// url of the backend server
// heroku server
const SERVER = "https://mchat-server.herokuapp.com/";
// local host
// const SERVER = "http://127.0.0.1:4002";
export const socket = io(SERVER);
export const SocketContext = createContext(socket);