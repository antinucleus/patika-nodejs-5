const fs = require('fs');

let modules = {};

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    if (file.endsWith('.js')) {
      const fileName = file.slice(0, file.length - 3);

      modules[fileName] = require(`./${fileName}`)[fileName];
    }
  });

module.exports = modules;
