const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/notes-app', { useNewUrlParser: true, useUnifiedTopology: true });

const Note = mongoose.model('Note', {
    title: String,
    body: String
});


const newNote = new Note({ title: 'tutuł testowy', body: 'tekst naszej notatki' });

newNote.save().then(()=> console.log('notatka została zapisana'));