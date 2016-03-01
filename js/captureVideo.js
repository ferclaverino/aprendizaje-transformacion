(function(exports) {
  var isCapturing = false;
  var myStream;

  function start (selector) {
    if (!isCapturing) {
      var video = document.querySelector(selector);
      isCapturing = true;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      if (navigator.getUserMedia) navigator.getUserMedia({video: true}, handleVideo, videoError);

      function handleVideo(stream) {
        myStream = stream;
        video.src = window.URL.createObjectURL(stream);
      }

      function videoError(e) {}
    }
  }

  function stop () {
    var track = myStream.getTracks()[0];  // if only one media track
    track.stop();
    isCapturing = false;
  }

  exports.start = start;
  exports.stop = stop;

})(this.captureVideo = {});
