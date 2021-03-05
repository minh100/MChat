### View the website here

https://minh100.github.io/MChat/

## Chat App

This is a web app that allows multiple users to join a room and talk within the room

## Installation

Simple clone the repo then go into each folder (root, server, client) and run 
> npm install

## Start Local App

Navigate to **server** folder and run
> npm run localStart
Then navigate into **client** folder and make sure the __SERVER__ variable is set to localhost in the **__Socket.js__** file. Then run
> npm start

## Updating work

Simply push to github from the root folder to push code both in client and server then

##### If any changes in server folder
1. Navigate into the server folder
2. git add .
3. git commit -m
4. git push heroku master

##### If any changes in client folder
1. npm run deploy

### Features

- Join and create rooms using specific room code
- Create individual/unique usernames
- Shows current people within a room

### Tech Stack

- Backend
  - Express
  - Nodejs
- Front End
  - React
- Other
  - SocketIO
    - For web sockets and multiplayer capability

### Dev Features

- Github Pages
  - Used to host/display frontend server
- Heroku
  - Used to host backend server
- cors
- nodemon
- react-scroll-to-bottom
  - When installing might have a tree dependency problem
    - To fix this simply add **__--legacy-peer-deps__" 
      > npm install --save react-scroll-to-bottom --legacy-peer-deps 
- react-router-dom
- querystring
  - Used to parse url to recieve info for names and rooms

### Tutorials/Inspiration

https://www.youtube.com/watch?v=ZwFA3YMfkoc





