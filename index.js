const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);
const port = 8080
// on intègre socketIo
const socketManager = require('./websocket/socket-manager')(io);

require('./startup/routes')(app, express)

/***********************************************************
Lancement du server
***********************************************************/
// server.listen(port, (err) => {
//     if (err) console.error(err);

//     console.info(
//         `${new Date().toString()},
//     : Serveur démarré - > http://localhost:${server.address().port}`
//     );
// });

http.listen(port, (err) => {
    console.log('started')
})
