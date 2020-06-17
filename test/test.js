var expect = require('chai').expect;

const driver_port = require('../driver');
const portDeviceConnected = require('../device/client');

it('Device shoule connect to correct port', () => {
    expect(portDeviceConnected).to.equal(driver_port);
});

it('This test should fail as device connects to wrong port', () => {
    expect(portDeviceConnected).to.equal(6000);
});
