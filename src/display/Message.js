

function Message(message) {
    this.message = message;
    
	this.canvas = document.createElement("canvas");
	document.body.appendChild(this.canvas);
	this.ctx = canvas.getContext("2d");
}

module.exports = Message;