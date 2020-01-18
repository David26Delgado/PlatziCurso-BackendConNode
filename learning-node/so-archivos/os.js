const os = require('os');

// Para revisar la información de los núcleos del CPU
// console.log('CPU Info', os.cpus());

// Para revisar la dirección IP:
// console.log(
//   'IP Address',
//   os
//     .networkInterfaces()
//     ['Conexión de red inalámbrica'].map((item) => item.address)
// );

// Para revisar la memoria libre del sistema
// console.log('Free memory', os.freemem());
// console.log(
//   'Free memory',
//   (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
//   'GB'
// );

// Revisar el tipo del SO
// console.log('Type', os.type());

// Revisar la versión del SO
// console.log('SO version', os.release());

// Revisar información del usuario
console.log('User info', os.userInfo());
