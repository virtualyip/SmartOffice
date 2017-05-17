window.addEventListener('load', function() {
  window.Apps = window.Apps || {};
  window.Apps.Recognition = window.Apps.Recognition || new webkitSpeechRecognition();

  window.Apps.Recognition.continuous = false;
  window.Apps.Recognition.interimResults = false;
  window.Apps.Recognition.lang = "en-US"; 

  window.Apps.Recognition.callback = function (err, result) {
    console.log(err, result);
  }

  window.Apps.Recognition.onend = function (e) {
    if (window.Apps.Recognition.callback) {
      window.Apps.Recognition.callback('no results');
    }
  };


  window.Apps.Recognition.onresult = function (e) {
    // cancel onend handler
    window.Apps.Recognition.onend = null;
    console.log(e);
    if (window.Apps.Recognition.callback) {
      window.Apps.Recognition.callback(null, {
        transcript: e.results[0][0].transcript,
        confidence: e.results[0][0].confidence
      });
    }
  }
});