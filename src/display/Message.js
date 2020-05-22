function Message(messages, duration, color, playOnce, random) {
	this.messages = messages;
	this.duration = duration;
	this.color = color;
	this.playOnce = playOnce;
    
	this.canvas = document.createElement("canvas");
	document.body.appendChild(this.canvas);
}

Message.prototype.show = function() {

	this.ctx = this.canvas.getContext("2d");
	this.ctx.font = "30px Arial";
	this.ctx.fillStyle = this.color;
	this.ctx.fillText(this.messages[0], 10, 50);

	setTimeout(() => this.hide(), this.duration);
}

Message.prototype.hide = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

module.exports = Message;