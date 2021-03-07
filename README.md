### View the website here

https://minh100.github.io/MChat/

## MChat

Web app that allows the creation of multiple rooms and allow multiple users to join a room and talk to other users

## Installation

Simple clone the repo then go into each folder (root, server, client) and run 
> npm install

## Start Local App

Navigate to **server** folder and run
> node server.js

Then navigate into **client** folder and make sure the __SERVER__ variable is set to localhost in the **__Socket.js__** file. Then run

> npm start

## Updating work

Simply push to github from the root folder to push code both in client and server then

#### If any changes in server folder
1. Navigate into the server folder
2. git add .
3. git commit -m "message"
4. git push heroku master

#### If any changes in client folder
1. npm run deploy

## Features

- Create multiple rooms using a user made code
  - Multiple users can join a single room and talk with one another
  - Prevents multiple room with the same code
- Create individual/unique usernames
- Lists out the rooms that are created and in session
  - Shows the number of people within a room

## Tech Stack

- Backend
  - Express
  - Nodejs
- Front End
  - React
- Other
  - Socket.IO

## Dev Features

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
- React Context for state management
- querystring
  - Used to parse url to recieve info for names and rooms

## References

[Github Pages reference](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)<br/>
Deploy by Heroku CLI is the easiest way<br/>




