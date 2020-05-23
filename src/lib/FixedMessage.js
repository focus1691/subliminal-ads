import Message from "../display/Message";
import { validateMessages, replaceImages } from "../utils/Validator";

/**
 * The FixedMessage is a subliminal message type that takes only text as the message type, either
 * and Array of messages or a string.
 * 
 * @param {Array} messages — List of messsages
 * @param {string} color — Message color
 * @param {number} duration — How long (ms) to display the message for
 * @param {number} interval — Time (ms) to show / hide messages
 * @param {boolean} repeat — Repeat messages
 * @param {boolean} random — Display messages randomly
 */
function FixedMessage({ messages = [], color = '#000', duration = 250, interval = 10000, repeat = false, random = false }) {
	this.isPlaying = false;
	this.messages = messages;
	this.color = color;
	this.duration = duration;
	this.interval = interval;
	this.repeat = repeat;
	messages = replaceImages(messages);
	this.message = new Message(messages, this.duration, color, repeat);
}

/**
 * Start playing the messages
 */
FixedMessage.prototype.start = function(delay) {
	if (delay) setTimeout(startMessageSequence.bind(this), delay || 0);
	else startMessageSequence();

	function startMessageSequence() {
		try {
			validateMessages(this.messages);
	
			if (!this.isPlaying) {
				this.id = setInterval(() => this.message.show(), this.interval); // This is where the action begins
				this.isPlaying = true;
			}
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

/**
 * Play the message only one time
 */
FixedMessage.prototype.once = function(delay) {
	if (delay) setTimeout(playMessageOnce.bind(this), delay);
	else playMessageOnce();

	function playMessageOnce() {
		try {
			validateMessages(this.messages);
	
			if (!this.isPlaying) {
				this.message.show();
			}
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

/**
 * Stop playing the messages, cleanup the canvas
 */
FixedMessage.prototype.stop = function(delay) {
	if (delay) setTimeout(stopMessagePlaying.bind(this), delay);
	else stopMessagePlaying();

	function stopMessagePlaying() {
		if (this.isPlaying) {
			clearInterval(this.id);
			this.isPlaying = false;
		}
	}
	return this;
}

module.exports = FixedMessage;