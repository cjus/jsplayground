angular.module('app')
  .controller('ConsoleController', ['$scope', '$window', function($scope, $window) {
    'use strict';

    var VERSION = '0.0.1';
    $scope.console = [];

    $scope.getDate = function() {
      var date = new Date()
        , hours = date.getHours()
        , minutes = date.getMinutes()
        , seconds = date.getSeconds();
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return "" + hours + ":" + minutes + ":" + seconds + "." +
        date.getMilliseconds();
    };

    /**
     * mock console log
     * @param message - text message
     * @param objectValue - value / object
     */
    $window.mcl = function(message, objectValue) {
      var strDate = $scope.getDate();
      try {
        if (typeof objectValue !== "undefined") {
          if (typeof objectValue === "object") {
            message = message + ': ' + JSON.stringify(objectValue);
          } else {
            message = message + ': ' + objectValue;
          }
        }
        $scope.console.push(strDate + ": " + message);
      } catch (exception) {
        $scope.console.push(exception.message);
      }
    };

    $window.mcl("JavaScript Playground v" + VERSION);
    $window.playground();
  }]);
