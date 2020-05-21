import Message from "../display/Message";

function StandAloneMessage ({text='', color='#000', duration=250, interval=10000, playOnce=false}) {
	this.text = text;
	this.color = color;
	this.duration = duration;
	this.interval = interval;
	this.playOnce = playOnce;
	this.message = new Message(text);
};

StandAloneMessage.start = function() {
	setInterval(this.message.show(), this.interval);
};

StandAloneMessage.stop = function() {
	
};

module.exports = StandAloneMessage;