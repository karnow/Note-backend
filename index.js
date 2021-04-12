const express = require('express');
const app = express();
const {port} = require('./config');



app.get('/', function (request, response) {
    response.send('Serwer działa');
})
app.get('/karol', function (request, response) {
    response.send('podstrona karol działa');
})



app.listen(port, function () {
    console.log('serwer słucha... http://localhost:'+port);
})