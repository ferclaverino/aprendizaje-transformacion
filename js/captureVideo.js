(function(exports) {
  var myStream;

  function init(selector) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) navigator.getUserMedia({video: true}, handleVideo, videoError);

    function handleVideo(stream) {
      myStream = stream;
      var mySrc = window.URL.createObjectURL(stream);
      $(selector).attr('src', mySrc);
    }
  }

  function videoError(e) {}

  function go (selector) {
    var video = document.querySelector(selector);
    video.src = mySrc;
  }

  function stop () {
    var track = myStream.getTracks()[0];  // if only one media track
    track.stop();
  }

  exports.init = init;
  exports.go = go;
  exports.stop = stop;

})(this.captureVideo = {});
