const util = require('util');

const helloPluto = util.deprecate(() => {
  console.log('Hello Pluto.');
}, 'Pluto is deprecated. It is not a planet anymore.');

helloPluto();

// node --inspect archivo.js para activar el debugging de un archivo
