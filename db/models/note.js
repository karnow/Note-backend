const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    }

})

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
