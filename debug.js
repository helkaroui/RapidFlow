// ===================================================
// FOR DEVELOPMENT
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// Created by
// Modified by : Hamza EL KAROUI
// ===================================================

global.baseUrl = process.argv[2]
global.token = process.argv[3]

console.log('------------------<debug.js>--------------------')
console.log(global.baseUrl)
console.log(global.token)

const options = {};

options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];

require('total.js/debug')(options);