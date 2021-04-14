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


    updateNote(request, response) {
        response.send('notatka zaktualizowana');
    }

    deleteNote(request, response) {
        const id = request.params.id;
        
        response.send('notatka skasowana. ID: '+ id);
    }
    
}
module.exports = new noteActions();
