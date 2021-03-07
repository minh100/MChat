const rooms = []; // array of rooms

const addRoom = (room) => {
    room = room.trim().toLowerCase();

    // boolean to check if roomName already exists
    // avoids duplicate rooms
    let doesRoomExist = rooms.find(roomSearch => roomSearch.roomName === room);

    if (!doesRoomExist) {   // rooms does not exist
        let obj = {
            roomName: room,
            numberOfPeople: 1
        }
        rooms.push(obj);    // push new room to rooms array
    } else {
        let index = rooms.findIndex(roomSearch => roomSearch.roomName === room);    // get index of room
        rooms[index].numberOfPeople = getCountOfRoom(room) + 1;  // add one to the number of people in the room
    }
    return rooms;   // array of rooms
}

const removeRoom = (room) => {
    room = room.trim().toLowerCase();

    // index of the room
    const index = rooms.findIndex(roomSearch => roomSearch.roomName === room);

    if (index !== -1) {
        let peopleCount = getCountOfRoom(room); // get count of people in room
        if(peopleCount === 1) {
            rooms.splice(index, 1)[0];  // remove room from the rooms array
        } else {
            rooms[index].numberOfPeople = getCountOfRoom(room) - 1; // update number of people in room
        }
    }
    return rooms;
}

// function to get count of people in a room
const getCountOfRoom = (roomName) => {
    let index = rooms.findIndex(roomSearch => roomSearch.roomName === roomName);
    return rooms[index].numberOfPeople;
}

const getRooms = () => {
    return rooms;
}

module.exports = { addRoom, removeRoom, getRooms};
