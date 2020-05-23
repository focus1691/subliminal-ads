/**
 * The subliminal message that contains the canvas it will be displayed on and other settings.
 * 
 * @param {Array} messages — List of messsages
 * @param {string} width — Message width
 * @param {string} height — Message height
 * @param {number} duration — How long to display the message
 * @param {string} color — Message color
 * @param {boolean} repeat — Repeat messages
 * @param {boolean} random — Display messages randomly
 */
function Message(messages, width, height, duration, color, repeat, random) {
	this.index = 0;
	this.messages = messages;
	this.duration = duration;
	this.color = color;
	this.repeat = repeat;
	this.random = random;
    
	this.canvas = document.createElement("canvas");
	this.canvas.style.width = width;
	this.canvas.style.height = height;
	this.canvas.style.position = 'absolute';
	this.canvas.style.zIndex = 1147483647;
  
	document.body.insertBefore(this.canvas, document.body.firstChild);
}

/**
 * Display the message on screen
 */
Message.prototype.show = function() {
	this.ctx = this.canvas.getContext("2d");
	this.ctx.font = "20px Arial";
	this.ctx.fillStyle = this.color;

	//! Middle of screen
	let x = (this.canvas.width - this.ctx.measureText(this.messages[0]).width) / 2; // Use the text size (px) to horizontally center text 
	let y = this.canvas.height / 2;

	// Message is a string
	if (typeof this.messages[this.index] === "string") {
		let msg = this.messages[this.index];
		this.ctx.fillText(msg, x, y);
	}
	// Message is an image
	else if (this.messages[this.index].nodeName === "IMG") {
		let img = this.messages[this.index];
		this.ctx.drawImage(img, -10, 0, this.canvas.width, this.canvas.height);
	}

	this.index = (this.index + 1) % this.messages.length; // loop from front to back 

	setTimeout(() => this.hide(), this.duration); // Message only visible for 'duration'
}

/**
 * Clear the canvas, removing the message
 */
Message.prototype.hide = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

module.exports = Message;