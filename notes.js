const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplacteNote = notes.filter((note) => {
        return note.title === title;
    });
    if(duplacteNote.length === 0){
        notes.push({
            title: title,
            body : body
        })
    }else{
        console.log("Note was already present")
    }
    saveNotes(notes);
}

const removeNote = (title) => {
 
    const notes = loadNotes();

    const notesTokeep = notes.filter((notes) => {
          
        return notes.title !== title
    });

    if(notesTokeep.length < notes.length){

        console.log("remove the note successfully!");
        saveNotes(notesTokeep);
    }else {
        console.log("no note with this title")
    }

}
 // list all notes...here
const listNotes = () => {
    // console.log('List the notes');
    const notes = loadNotes();

    notes.forEach(note => {
         console.log(note.title);
    });
};

const readNotes = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title );

    if(note){
        console.log("Note : " + note.title);
        console.log("Body : " + note.body);
    }else{
        console.log("note not found");
    }

}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    }catch(e){
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))  
}



module.exports = {
   addNote : addNote,
   removeNote : removeNote,
   listNotes : listNotes,
   readNotes : readNotes
   
}
