(function () {
  "use strict";
  angular.module("DIApp", []).controller("DIController", DIController);
  DIController.infect = ["$scope", "$filter"];
  function DIController($scope, $filter, $injector) {
    $scope.name = "Bryan";
    $scope.stateOfBeing = "hungry";
    $scope.upper = function () {
      var upCase = $filter("uppercase");
      $scope.name = upCase($scope.name);
    };

    $scope.feedBryan = function () {
      $scope.stateOfBeing = "fed";
    };
  }
})();
