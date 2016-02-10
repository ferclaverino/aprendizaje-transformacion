(function(exports) {
  var fadeOut = {
    start: 40,
    end: 48
  };
  var fadeIn = {
    start: 2 * 60 + 48,
    end: 2 * 60 + 50
  };

  function init(audioSelector, bookmarkSelector) {
    var audio = document.querySelector(audioSelector);
    audio.currentTime = 0;

    if (!audio.ontimeupdate) {
      audio.ontimeupdate = function() {
        if (audio.currentTime > fadeOut.start && audio.currentTime <= fadeOut.end) {
          audio.volume -= 0.03;
        }
        if (audio.currentTime > fadeIn.start && audio.currentTime <= fadeIn.end) {
          if (audio.volume + 0.12 < 1) {
            audio.volume += 0.12;
          } else {
            audio.volume = 1;
          }
        }
      };
    }

    var bookmark = document.querySelector(bookmarkSelector);
    if (!bookmark.onclick) {
      bookmark.onclick = function() {
        audio.currentTime = fadeIn.start;
        if (audio.paused) {
          audio.play();
        }
      };
    }
  }

  exports.init = init;

})(this.audio = {});
