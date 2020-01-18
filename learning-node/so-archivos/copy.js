const fs = require('fs');

const fileToCopy = process.argv[2];
const copiedFile = process.argv[3];

if (!fileToCopy) {
  throw new Error('Debe agregar el nombre del archivo que se quiere copiar.');
}

if (!copiedFile) {
  throw new Error('Debe agregar el nombre del archivo nuevo.');
}

fs.copyFile(fileToCopy, copiedFile, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`${fileToCopy} fue copiado como ${copiedFile}`);
});
