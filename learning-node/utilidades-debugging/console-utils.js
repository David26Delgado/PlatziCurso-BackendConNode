// %s string
// %d numero
// %j json

console.log('Un %s y un %s', 'perro', 'gato');

console.info('Hello world');
console.warn('Hello error');

console.assert(42 == '42');
console.assert(42 === '42');

// console.trace('Hello');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('Hello from foo');

// Para ver el debuglog se debe tener activado en NODE_DEBUG
// el valor que se pase al debuglog (en este caso foo)

// NODE_DEBUG=foo node console-utils.js
