// const { response } = require('express')
const Note = require('../db/models/note');


class noteActions {
    saveNote(request, response) {
    // const newNote = new Note({
    //         title: 'zakupy',
    //         body: 'mleko, jaja ,chleb'
    //     });
    //     newNote.save().then(() => {
    //         console.log('notatka została zapisana')
    //     });
        const title = request.body.title;
        const body = request.body.body;
        response.send('notatka zapisana, title:' + title + ' body:' + body);
    }

    getAllNotes(request, response) {
        response.send('wszystkie notatki');
    }

    getNote(request, response) {
        response.send('notatka pobrana');
    }

    updateNote(request, response) {
        response.send('notatka zaktualizowana');
    }

    deleteNote(request, response) {
        const id = request.params.id;
        
        response.send('notatka skasowana. ID: '+ id);
    }
    
}
module.exports = new noteActions();
