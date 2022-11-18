(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function () {
      var amountOfDishes = $scope.dishes.split(",");
      $scope.amountOfDishes = amountOfDishes;
      if ((amountOfDishes == "")) {
        $scope.message = "Please enter data first";
      } else if (amountOfDishes.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
