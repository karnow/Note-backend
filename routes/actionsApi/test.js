module.exports = {
    homepage (request, response) {
    response.send('<h1>Serwer działa</h1>');
    },
    page (request, response) {
    response.send('podstrona karol działa');
}
}