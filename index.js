const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//db wczytanie ppliku i utworzenie polaczenia z baza
require('./db/mongoose');

//parsery
//Content-type: aplication/json
app.use(bodyParser.json());


//routes
app.use('/api/', apiRouter);


//serwer
app.listen(port, function () {
    console.log('serwer słucha... http://localhost:'+port);
})