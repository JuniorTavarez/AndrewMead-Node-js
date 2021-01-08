const chalk = require('chalk');
const notes = require('./notes');

console.log(notes());

console.log(chalk.green.bold.inverse('Success!'));
