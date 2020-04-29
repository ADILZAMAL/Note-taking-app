const fs = require("fs");
const chalk = require("chalk");

addNotes = (title, body) => {
  const data = {
    title,
    body,
  };
  const notes = getNotes();
  const dublicateNote = notes.filter((note) => note.title === title);

  if (dublicateNote.length === 0) {
    notes.push(data);
    //console.log( notes)
    saveNotes(notes);
    console.log(chalk.bgGreen("Notes added"));
  } else {
    console.log(chalk.bgRed("Title already taken"));
  }
};
getNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch (error) {
    return [];
  }
};

saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

removeNotes = (title) => {
  let notes = getNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  if (notes.length == filteredNotes.length) {
    console.log(chalk.bgRed("No note is removed"));
  } else {
    console.log(chalk.bgGreen("Note is removed"));
  }
  // console.log('removing note')
};

listNotes = () => {
  const notes = getNotes();
  console.log(chalk.bgYellow.bold("   YOUR NOTES   "));
  notes.forEach((note) => console.log(chalk.inverse.bgGreenBright(note.title)));
};

readNotes = (title) => {
  const notes = getNotes();
  const rnote = notes.find((note) => {
    return note.title === title;
  });
    if(rnote)
        console.log(chalk.bgGreen(rnote.body));
    else
        console.log(chalk.bold.bgRed('Note not found with given title'))
};

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
};
