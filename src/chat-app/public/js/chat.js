const socket = io();
const chatForm = document.querySelector('#chatForm');
const messageEL = document.querySelector('#chatMessage');

// socket.on('countUpdated', count => {
// 	console.log(`The count has been updated ${count}`);
// });

// document.querySelector('#increment').addEventListener('click', () => {
// 	console.log(`clicked`);
// 	socket.emit('increment');
// });

chatForm.addEventListener('submit', event => {
	event.preventDefault();
	const message = messageEL.value;
	messageEL.value = '';
	socket.emit('sendMessage', message);
});

socket.on('message', message => {
	console.log(message);
});
