const express = require('express');
const {json} = require('body-parser');

const {readMessages, createMessage, updateMessage, deleteMessage} = require('./controllers/messages_controller.js');
const app = express();

app.use(json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', readMessages);
app.post('/api/messages', createMessage);
app.put('/api/messages/:id', updateMessage);
app.delete('/api/messages/:id', deleteMessage);



app.listen(3001, ()=>{
	console.log("Listening on port 3001");
});