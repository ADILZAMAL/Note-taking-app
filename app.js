//const validator = require('validator');
const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

//console.log(validator.isEmail('adilzamal@gmail.com'))
//console.log(validator.isURL('www.facebook.com'))
// const msg = getNotes();

// const action = process.argv[2];

// if(action === 'add'){
//     console.log(chalk.green.bold('Adding...'))
// }else if(action === 'remove'){
//     console.log(chalk.red.bold('Removing...'));
// }

//Create add command

yargs.command({
  command: "add",
  describe: "Add note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
    //console.log('Title:'+argv.title+"\nBody: "+argv.body)
  },
});
// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove note",
  builder: {
    title: {
      describe: "title of notes to be removed",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});
//Create list command
yargs.command({
  command: "list",
  describe: "List note",
  handler: function () {
    notes.listNotes();
  },
});
//Create read command
yargs.command({
  command: "read",
  description: "Read note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
      notes.readNotes(argv.title);
  },
});

yargs.parse();
