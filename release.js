// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

global.baseUrl = process.argv[2]
global.token = process.argv[3]

console.log('------------------<release.js>--------------------')
console.log('Server url: ', global.baseUrl)
console.log('Server token: ',global.token)

console.log('------------------<end release.js>--------------------')
const options = {};

options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;

require('total.js').http('release', options);
// require('total.js').cluster.http(5, 'release', options);