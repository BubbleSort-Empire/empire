"use strict";

// Translations (English required)
mejs.i18n.en["mejs.speed-rate"] = "Speed Rate";

/**
 * Change Speed
 *
 * Simplified the speed plugin to handle speed changes on click instead of a menu
 */

// Feature configuration
Object.assign(mejs.MepDefaults, {
  speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
  defaultSpeed: "1.00",
  speedChar: "x",
  speedText: null,
});

Object.assign(MediaElementPlayer.prototype, {
  // Public variables (also documented according to JSDoc specifications)

  /**
   * Feature constructor.
   *
   * Always has to be prefixed with `build` and the name that will be used in MepDefaults.features list
   * @param {MediaElementPlayer} player
   * @param {HTMLElement} controls
   * @param {HTMLElement} layers
   * @param {HTMLElement} media
   */
  buildchangespeed(player, controls, layers, media) {
    // This allows us to access options and other useful elements already set.
    // Adding variables to the object is a good idea if you plan to reuse
    // those variables in further operations.
    const t = this;

    let playbackSpeed,
      defaultInArray = false,
      speeds = [],
      speedTitle = mejs.Utils.isString(t.options.speedText)
        ? t.options.speedText
        : mejs.i18n.t("mejs.speed-rate");

    const getSpeedNameFromValue = (value) => {
      for (let i = 0, total = speeds.length; i < total; i++) {
        if (speeds[i].value === value) {
          return speeds[i].name;
        }
      }
    };

    for (let i = 0, total = t.options.speeds.length; i < total; i++) {
      const s = t.options.speeds[i];

      if (typeof s === "string") {
        speeds.push({
          name: `${s}${t.options.speedChar}`,
          value: s,
        });

        if (s === t.options.defaultSpeed) {
          defaultInArray = true;
        }
      } else {
        speeds.push(s);
        if (s.value === t.options.defaultSpeed) {
          defaultInArray = true;
        }
      }
    }

    if (!defaultInArray) {
      speeds.push({
        name: t.options.defaultSpeed + t.options.speedChar,
        value: t.options.defaultSpeed,
      });
    }

    playbackSpeed = t.options.defaultSpeed;

    let index;
    speeds = speeds.sort(function (a, b) {
      return parseFloat(a.value) - parseFloat(b.value);
    });

    index = speeds.findIndex(function (speed) {
      return speed.value === t.options.defaultSpeed;
    });

    t.cleanchangespeed(player);

    const buttonHTML = (value) => {
      return (
        `<button type="button" aria-controls="${t.id}" title="${speedTitle}" ` +
        `aria-label="${speedTitle}" tabindex="0">${value}</button>`
      );
    };

    player.speedButton = document.createElement("div");
    player.speedButton.className = `${t.options.classPrefix}button ${t.options.classPrefix}speed-button`;
    player.speedButton.innerHTML = buttonHTML(
      getSpeedNameFromValue(t.options.defaultSpeed)
    );

    t.addControlElement(player.speedButton);

    player.speedButton.addEventListener("click", function () {
      index++;
      index %= speeds.length;
      media.playbackRate = parseFloat(speeds[index].value);
      this.firstElementChild.innerText =
        speeds[index].value + t.options.speedChar;
    });

    media.addEventListener("loadedmetadata", () => {
      if (playbackSpeed) {
        media.playbackRate = parseFloat(playbackSpeed);
      }
    });
  },

  // Optionally, each feature can be destroyed setting a `clean` method

  /**
   * Feature destructor.
   *
   * Always has to be prefixed with `clean` and the name that was used in MepDefaults.features list
   * @param {MediaElementPlayer} player
   * @param {HTMLElement} controls
   * @param {HTMLElement} layers
   * @param {HTMLElement} media
   */
  cleanchangespeed(player, controls, layers, media) {
    if (player) {
      if (player.speedButton) {
        player.speedButton.parentNode.removeChild(player.speedButton);
      }
      if (player.speedSelector) {
        player.speedSelector.parentNode.removeChild(player.speedSelector);
      }
    }
  },

  // Other optional public methods (all documented according to JSDoc specifications)
});
