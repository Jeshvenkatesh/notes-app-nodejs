const yargs = require('yargs');
const notes = require('./notes')

yargs.command({

    command : 'add',
    describe : 'Add a note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Note body",
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({

    command : 'remove',
    describe : 'remove a note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Note body",
            demandOption : false,
            type : 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

yargs.command({

    command : 'list',
    describe : 'list the notes',
    handler: () => {
        notes.listNotes();
    }
});

yargs.command({

    command : 'read',
    describe : 'read the note',
    handler: (argv) => {
        notes.readNotes(argv.title);
    }
})


yargs.parse();