const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'driver-data',
    'data.json'
);
const driver_port = 3000;
const io = require('socket.io').listen(driver_port);

io.on('connection', (socket) => {
    console.log(`Driver active on port: ${driver_port} \n`);

    socket.on('deviceEvent', (data) => {
        fs.readFile(p, (err, filecontent) => {
            let driverData = [];
            if (!err) {
                driverData = JSON.parse(filecontent);
            };
            driverData.push(data);

            fs.writeFile(p, JSON.stringify(driverData), (err) => {
                if (!err) {
                    console.log("driver successfully logged the device state to  file data.json");
                    console.log("Driver idle for 5 seconds \n");
                    setTimeout(() => {
                        socket.emit('driverEvent', {});
                    }, 5 * 1000);
                }
            })
        });
    });
    setTimeout(() => {
        socket.emit('driverEvent', {});
    }, 5 * 1000);
});

module.exports = driver_port;