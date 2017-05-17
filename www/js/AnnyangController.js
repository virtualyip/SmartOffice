angular.module('starter.controllers').controller('AnnyangController', function($scope) {

  $scope.init = function(data){
    jsData.Recognition = $scope;
    $scope.pagebackseq = [];

    $scope.listening = false;
    $scope.Recognition = new webkitSpeechRecognition();

    $scope.Recognition.continuous = false;
    $scope.Recognition.interimResults = false;
    $scope.Recognition.lang = "en-US"; 

    $scope.Recognition.callback = function (err, result) {
      console.log(err, result);
      $scope.listening = false;
    }

    $scope.Recognition.onend = function (e) {
      if ($scope.Recognition.callback) {
        $scope.Recognition.callback('no results');
      }
      $scope.listening = false;
    };


    $scope.Recognition.onresult = function (e) {
      // cancel onend handler
      $scope.Recognition.onend = null;
      console.log(e);
      $scope.listening = false;
      if ($scope.Recognition.callback) {
        $scope.Recognition.callback(null, {
          transcript: e.results[0][0].transcript,
          confidence: e.results[0][0].confidence
        });
      }
    }
  }

  $scope.Recognition.onstart = function (e) {
    $scope.listening = true;
  }
}