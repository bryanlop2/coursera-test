(function () {
  "use strict";
  angular.module("DIApp", []).controller("DIController", DIController);
  DIController.infect = ["$scope", "$filter"];
  function DIController($scope, $filter, $injector) {
    $scope.name = "Bryan";
    $scope.value2 = "Bryan";
    $scope.radioButtonValue = [
      { label: "Approve request", value: "approved" },
      { label: "Refuse request", value: "refused" },
      { label: "Other reason", value: "other" },
    ];
    $scope.selectedValue = true;
    // $scope.label = $scope.properties.label;
    $scope.radioButtonValues = [
      { label: "Approve request", value: "approved" },
      { label: "Refuse request", value: "refused" },
      { label: "Other reason", value: "other" },
    ];
    $scope.value = "Bryan";
    $scope.true = true;
    $scope.stateOfBeing = "hungry";
    $scope.upper = function () {
      var upCase = $filter("uppercase");
      $scope.name = upCase($scope.name);
    };

    $scope.feedBryan = function () {
      $scope.stateOfBeing = "fed";
    };

    $scope.getValue = function (option) {
      var selectedOption = properties.algo;
      var value = option.selectedOption;
      return value;
    };

    $scope.inputCheck = function () {
      var letters = /^[A-Za-z\s]*$/;
      if (!$scope.value2.match(letters)) {
        $scope.showRegexError = "This value does not match the Regex";
        return $scope.showRegexError;
      } 
      else {
        $scope.showRegexError = "";
        return $scope.showRegexError;
      }
    };
  }
})();
