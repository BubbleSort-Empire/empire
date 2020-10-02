"use strict";

const options = {
  defaultSpeed: "1.00",
  speeds: ["1.25", "1.50", "2.00", "0.75"],
  loop: true,
  skipBackInterval: 15,
  jumpForwardInterval: 15,
  features: [
    "current",
    "progress",
    "duration",
    "changespeed",
    "skipback",
    "playpause",
    "jumpforward",
    "volume",
  ],
};

new MediaElementPlayer(document.querySelector("audio"), options);

// Separate the audio controls so I can style them better.
(() => {
  const elementTop = document.createElement("div");
  const elementBottom = document.createElement("div");
  elementTop.classList.add("mejs-prepended-buttons");
  elementBottom.classList.add("mejs-appended-buttons");

  const controls = document.querySelector(".mejs__controls");
  controls.prepend(elementTop);
  controls.append(elementBottom);

  const controlsChildren = Array.from(controls.childNodes).filter((v) =>
    v.className.startsWith("mejs_")
  );

  controlsChildren.slice(0, 3).forEach((elem) => {
    elementTop.append(elem);
  });

  controlsChildren.slice(3, controlsChildren.length).forEach((elem) => {
    elementBottom.append(elem);
  });

  /*
  var skipBack = elementBottom.getElementsByClassName("mejs__skip-back-button")[0].getElementsByTagName("button")[0];
  skipBack.innerHTML = '<i class="fas fa-undo-alt fa-3x"></i>'

  var skipForward = elementBottom.getElementsByClassName("mejs__jump-forward-button")[0].getElementsByTagName("button")[0];
  skipForward.innerHTML = '<i class="fas fa-redo-alt fa-3x"></i>'

  var play = elementBottom.getElementsByClassName("mejs__play")[0].getElementsByTagName("button")[0];
  play.innerHTML = '<i class="fas fa-play"></i>'
  */

})();
