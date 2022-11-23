(function () {
  "use strict";

  angular
    .module("DigestApp", [])
    .controller("DigestController", DigestController);
  DigestController.$inject = ["$scope", "$timeout"];
  function DigestController($scope, $timeout) {
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = "Bryan";
    $scope.showNumberOfWatchers = function () {
      console.log($scope.$$watchersCount);
    };

    $scope.countOnce = function () {
      $timeout(function () {
        $scope.onceCounter++;
      }, 2000);
      //   setTimeout(function () {
      //     $scope.$apply(function () {
      //       $scope.onceCounter = 1;
      //       console.log("clicked!");
      //     });
      //   }, 2000);
    };

    $scope.appCounter = function () {
      // $timeout(function () {
        $scope.counter++;
      // }, 2000);
    };

    // $scope.$watch(function () {
    //   console.log("Digest Loop Fired!");
    // });
  }
})();
