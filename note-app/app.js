const fs = require('fs');

fs.writeFileSync('note.txt', 'this file was created by node.js. ');

fs.appendFileSync('note.txt', 'my name is john');
