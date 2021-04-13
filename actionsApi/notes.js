// const { response } = require('express')
const Note = require('../db/models/note')

module.exports = {
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
}
