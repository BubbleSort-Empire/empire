"use strict";

console.log("Audio Player Script Running.")

$(document).ready(function () {
  $('audio').mediaelementplayer({
	defaultSpeed: '1.00',
	speeds: ['1.25', '1.50', '2.00', '0.75'],
	loop: true,
	skipBackInterval: 15,
	jumpForwardInterval: 15,
	features: [
	  "skipback",
	  "playpause",
	  "jumpforward",
	  "speed",
	  "progress",
	  "current",
	  "duration",
	  "volume",
	]
  });
});