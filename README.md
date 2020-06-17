## Real-time-communication-nodejs

Simulation of real-time communication between a devie and driver using node js and socket.io. For running multiple processes (node apps) in same terminal, a package named "concurrently" is used. 

The driver app sends request to a virtual device after every 5 second to collect device  state info. The device sends an object containing current time as the key and device state as value.
The driver prints and write the data to a file stored locally.

A Unit test is added using libraries "mocha" and "Chai" to ensure device is connected to the right port on which driver is listening to.

---
## Requirements

For development, you will need Node.js and a node global package, npm installed in your environement.

## Install

    $ git clone https://github.com/vishal123v/LABFORWARD.git
    $ cd LABFORWARD
    $ npm install


## Running the project

    $ npm run s

## Running Test

    $ npm test    

