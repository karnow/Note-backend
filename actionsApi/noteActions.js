// const { response } = require('express')
const Note = require('../db/models/note')

class noteActions {
    saveNote(request, response) {
    const newNote = new Note({
            title: 'zakupy',
            body: 'mleko, jaja ,chleb'
        });
    newNote.save().then(() => {
            console.log('notatka została zapisana')
        }),
    response.send('Strona działa')
    }

    getAllNotes(request, response) {
        response.send('wszystkie notatki');
    }

    getNote(request, response) {
        response.send('..');
    }

    updateNote(request, response) {
        response.send('..');
    }

    deleteNote(request, response) {
        response.send('..');
    }
    
}
module.exports = new noteActions();
