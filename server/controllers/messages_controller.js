var messages = [];
var id = 0;

module.exports = {
	readMessages:(req, res) => {
		res.json(messages);
	},
	createMessage:(req, res) =>{
		messages.push({id:id, time:req.body.time, text:req.body.text});
		id++;
		res.json(messages);
	},
	updateMessage:(req, res)=>{
		var updateID = messages.findIndex( (val) => val.id===req.params.id);
		messages[updateID].text = req.body.text;
		res.json(messages);
	},
	deleteMessage:(req, res)=>{
		var deleteID = messages.findIndex( (val) => val.id===req.params.id);
		messages.splice(deleteID, 1);
		res.json(messages);
	}
}