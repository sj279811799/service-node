// config files:
const devConfig = './db-config-dev.js';
const uatConfig = './db-config-uat.js';
const overrideConfig = './db-config-override.js';

const fs = require('fs');

var config = null;

if (process.env.NODE_ENV === 'test') {
    console.log(`Load ${devConfig}...`);
    config = require(devConfig);
} else {
    console.log(`Load ${uatConfig}...`);
    config = require(uatConfig);
    try {
        if (fs.statSync(overrideConfig).isFile()) {
            console.log(`Load ${overrideConfig}...`);
            config = Object.assign(config, require(overrideConfig));
        }
    } catch (err) {
        console.log(`Cannot load ${overrideConfig}.`);
    }
}

module.exports = config;