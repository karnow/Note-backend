const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');

//db wczytanie ppliku i utworzenie polaczenia z baza
require('./db/mongoose');

//routes
app.use('/', apiRouter);



//serwer
app.listen(port, function () {
    console.log('serwer słucha... http://localhost:'+port);
})