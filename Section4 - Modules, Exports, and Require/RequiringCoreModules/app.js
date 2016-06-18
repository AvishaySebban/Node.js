var util = require('util'); //util.js undel /lib  not ./ not in a folder
// check doc util API in nodeJS.
var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);