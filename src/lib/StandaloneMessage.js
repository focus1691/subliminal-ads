import Message from "../display/Message";

function StandAloneMessage ({messages=[], color='#000', duration=250, interval=10000, playOnce=false, random=false}) {
	this.isPlaying = false;
	this.messages = messages;
	this.color = color;
	this.duration = duration;
	this.interval = interval;
	this.playOnce = playOnce;
	this.message = new Message(messages, this.duration, color, playOnce);
}

StandAloneMessage.prototype.start = function() {
	try {
		if (typeof messages === 'string' && messages.length <= 0) throw new Error('Enter a message with 0 or more characters');
		else if (Array.isArray(this.messages) && this.messages.length <= 0) throw new Error('Enter a valid list');

		if (!this.isPlaying) {
			this.id = setInterval(() => this.message.show(), this.interval);
			this.isPlaying = true;
		}
	} catch(err) {
		throw new Error(err.message);
	}
}

StandAloneMessage.prototype.stop = function() {
	if (this.isPlaying) {
		clearInterval(this.id);
		this.isPlaying = false;


		// Cleanup here
	}
}

module.exports = StandAloneMessage;