const express = require('express');
const router = express.Router();
const testActions = require('./actionsApi/test');


router.get('/', testActions.homepage);
router.get('/karol', testActions.page);



module.exports = router;