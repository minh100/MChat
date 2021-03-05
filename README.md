### View the website here

https://minh-chat.netlify.app/

## Chat App

This is a web app that allows multiple users to join a room and talk within the room

## Installation

Simple clone the repo then go into each folder (root, server, client) and run 
> npm install

## Start Local App

Navigate to **server** folder and run
> npm run localStart
Then navigate into **client** folder and run
> npm start

## Updating work

Simply push to github from the root folder to push code both in client and server then

##### If any changes in server folder
1. git add .
2. git commit -m
3. git push heroku master

##### If any changes in client folder
1. npm run build
2. netlify deploy


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

### Dev Features

- Netlify
  - Used to display front end
- Heroku
  - Used to create back end 
- cors
- nodemon
- react-scroll-to-bottom
  - When installing might have a tree dependency problem
    - To fix this simply add **__--legacy-peer-deps__" 
      > npm install --save react-scroll-to-bottom --legacy-peer-deps 
- react-router-dom
- querystring


### Tutorials/Inspiration

https://www.youtube.com/watch?v=ZwFA3YMfkoc

[Netlify help](https://docs.netlify.com/cli/get-started/#installation)





