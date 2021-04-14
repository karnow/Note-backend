const Note = require('../db/models/note');


class noteActions {

    async getAllNotes(request, response) {
        let result;
        try {
            result = await Note.find({});
        }
        catch (err){
            return response.status(500).json({ message: err.message });
        }
        response.status(200).json(result);
    }
    
    async getNote(request, response) {
        let result;
        const id = request.params.id;
        try {
            result = await Note.findOne({ _id: id })
        }
        catch (err) {
            return response.status(500).json({ message: err.message });
        }
        response.status(200).json(result);
    }

    async saveNote(request, response) {
        const title = request.body.title;
        const body = request.body.body;
        let newNote;
        try {
            newNote = new Note({
                title: title,
                body: body
            });
            await newNote.save();
        }
        catch (err) {
            return response.status(422).json({ message: err.message });
        }
        response.status(201).json(newNote);
    }

    async updateNote(request, response) {
        const id = request.params.id;
        const title = request.body.title;
        const body = request.body.body;

        const finedNote = await Note.findOne({ _id: id })
        finedNote.title = title;
        finedNote.body = body;
        await finedNote.save();
        
        response.status(201).json(finedNote);
    }

    async deleteNote(request, response) {
        const id = request.params.id;
        try {
         await Note.deleteOne({_id: id})
        }
        catch (err) {
            return response.status(500).json({ message: err.message });
        }
        response.status(204).send();
    }
    
}
module.exports = new noteActions();
