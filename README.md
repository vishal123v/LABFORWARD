##PROJECT PLAN

To do:
 -develop two simple Node.js applications to illustrate how asynchronous serial
  communication works between a serial device and a driver.

Accepetance Criteria:
 -model should consist of two processes that communicate asynchronously 
 -either process should write/read formatted ASCII, parse the result and print ongoing activity and intermediate state in a
  readable way to the user
 -one part to be a device driver and performing a query command, and 
 -the other part to be a virtual instrument which simulates its state and gives a response.

 
Definition of Done:
 -Produced code for presumed functionalities
 -Assumptions of User Story met
 -Project builds without errors
 -CLI implemented and tested
 -Unit tests written and passing
 -Project deployed on the test environment identical to production platform
 -Tests on devices listed in the project assumptions passed
 -Accepetance criteria met
 -Documentation updated
 



## real Time Communication

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

