const express = require('express');
const router = express.Router();



router.get('/', function (request, response) {
    response.send('Serwer działa');
})
router.get('/karol', function (request, response) {
    response.send('podstrona karol działa');
})



module.exports = router;