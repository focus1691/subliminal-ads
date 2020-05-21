module.exports = (function SubliminalMessages() {
	this.StandAloneMessage = require('./lib/StandaloneMessage');
	this.StaticMessage = require('./lib/StaticMessage');
})();


// SubliminalMessages.create = function (config) {
	// this.interval = config.interval;
	// this.duration = config.duration;
	// console.log(config);

	// let canvas = document.createElement("canvas");
	// document.body.appendChild(canvas);
	// const ctx = canvas.getContext("2d");

	// ctx.fillStyle = "green";
	// ctx.fillRect(10, 10, 150, 100);

	// setTimeout(function () {
	// 	ctx.clearRect(0, 0, 180, 140);
	// }, 2000);
// };

// new SubliminalMessages.create({ interval: 4, duration: 5 });

// const testSub = new SubliminalMessages();
// testSub

// console.log(new SubliminalMessages());

// module.exports = SubliminalMessages;
