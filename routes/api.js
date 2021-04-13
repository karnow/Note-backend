const express = require('express');
const router = express.Router();
const noteActions = require('../actionsApi/notes');


router.get('/', noteActions.saveNote);




module.exports = router;