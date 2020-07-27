"use strict";

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
      "changespeed",
      "progress",
      "current",
      "duration",
      "volume",
    ]
  });
});

// I'm saving this bit for future reference - Vic
// Separate the audio controls so I can style them better.
/*(() => {
  const elementTop = document.createElement('div');
  const elementBottom = document.createElement('div');
  elementTop.classList.add('mejs-prepended-buttons');
  elementBottom.classList.add('mejs-appended-buttons');

  const controls = document.querySelector('.mejs__controls');
  controls.prepend(elementTop);
  controls.append(elementBottom);

  const controlsChildren = Array.from(controls.childNodes).filter(v => v.className.startsWith("mejs_"));

  controlsChildren.slice(0, 3).forEach(elem => {
    elementTop.append(elem)
  });

  controlsChildren.slice(3, controlsChildren.length).forEach(elem => {
    elementBottom.append(elem)
  })
})()*/