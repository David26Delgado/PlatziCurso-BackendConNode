const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i = 0; i < 1e6; i++) {
  file.write(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad omnis eaque dolorem tenetur repellendus eum voluptates optio, fuga nisi quo at! Non consequuntur voluptas dolorum modi porro eos quae.'
  );
}

file.end();
