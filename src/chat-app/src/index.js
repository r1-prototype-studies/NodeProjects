const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server); // socket io requires http server

const port = process.env.PORT || 12345;

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

// server (emit) --> client (receive) - countUpdated
// client (emit) --> server (receive) - increment

// let count = 0;
// io.on('connection', socket => {
// 	console.log('New Websocket connection');
// 	console.log(count);
// 	socket.emit('countUpdated', count); // Send an event

// 	socket.on('increment', () => {
// 		count++;
// 		console.log(count);
// 		//socket.emit('countUpdated', count); // Only the one one who initiates will get updated
// 		io.emit('countUpdated', count); // All the sockets will get updated
// 	});
// });

io.on('connection', socket => {
	socket.emit('message', 'Welcome!');
	socket.on('sendMessage', message => {
		io.emit('message', message);
	});
});

server.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});
