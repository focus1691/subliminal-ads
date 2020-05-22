import Message from "../display/Message";

/**
 * The standAloneMessage is a subliminal message type that takes only text as the message type, either
 * and Array of messages or a string.
 * 
 * @param {Array} messages — List of messsages
 * @param {string} color — Message color
 * @param {number} duration — How long (ms) to display the message for
 * @param {number} interval — Time (ms) to show / hide messages
 * @param {boolean} repeat — Repeat messages
 * @param {boolean} random — Display messages randomly
 */
function StandAloneMessage ({messages=[], color='#000', duration=250, interval=10000, repeat=false, random=false}) {
	this.isPlaying = false;
	this.messages = messages;
	this.color = color;
	this.duration = duration;
	this.interval = interval;
	this.repeat = repeat;
	this.message = new Message(messages, this.duration, color, repeat);
}

/**
 * Start playing the messages
 */
StandAloneMessage.prototype.start = function() {
	try {
		//! Messages must have some text to use in the canvas: non-empty Array / non-empty String
		if (typeof messages === 'string' && messages.length <= 0) throw new Error('Enter a message with 0 or more characters');
		else if (Array.isArray(this.messages) && this.messages.length <= 0) throw new Error('Enter a valid list');

		if (!this.isPlaying) {
			this.id = setInterval(() => this.message.show(), this.interval); // This is where the action begins
			this.isPlaying = true;
		}
	} catch(err) {
		throw new Error(err.message);
	}
}

/**
 * Stop playing the messages
 */
StandAloneMessage.prototype.stop = function() {
	if (this.isPlaying) {
		clearInterval(this.id);
		this.isPlaying = false;


		// Cleanup here
	}
}

module.exports = StandAloneMessage;