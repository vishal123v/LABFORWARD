const io = require('socket.io-client');
const socket = io.connect("http://localhost:3000/", {
    reconnection: true
});

const connectedPort = + socket.io.opts.port;

const getTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
};

const deviceState = ['Green', 'Orange', 'Red'];

socket.on('connect', () => {
    console.log(`Device connected to Driver via port: ${connectedPort} \n`);

    socket.on('driverEvent', () => {
        console.log('Driver checking device state...');
        const state = deviceState[Math.floor(Math.random() * deviceState.length)];
        console.log("The device is in " + state + " state.")
        const stateInfo = {};
        stateInfo[getTime()] = state;
        console.log("sending state info to driver....");
        socket.emit('deviceEvent', stateInfo);
    })
});

module.exports = connectedPort;