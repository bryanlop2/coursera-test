(function () {
  "use strict";

  var shoppingList1 = [
    "Milk",
    "Donuts",
    "Cookies",
    "Chocolate",
    "Peanut Butter",
    "Pepto Bismol",
    "Pepto Bismol (Chocolate flavor)",
    "Pepto Bismol (Cookie flavor)",
  ];

  var shoppingList2 = [
    {
      name: "Milk",
      quantity: "2",
    },
    {
      name: "Donuts",
      quantity: "200",
    },
    {
      name: "Cookies",
      quantity: "300",
    },
    {
      name: "Chocolate",
      quantity: "5",
    },
  ];

  angular
    .module("BindingApp", [])
    .controller("BindingController", BindingController);

  BindingController.$inject = ["$scope"];
  function BindingController($scope) {
    $scope.firstName = "Bryan";
    $scope.fullName = "";
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.showNumberOfWatchers = function () {
      console.log("number of watchers: ", $scope.$$watchersCount);
    };

    $scope.setFullName = function () {
      $scope.fullName = $scope.firstName + " " + "López";
    };

    $scope.logFirstName = function () {
      console.log("first name: ", $scope.firstName);
    };

    $scope.logFullName = function () {
      console.log("lastname : ", $scope.fullName);
    };

    $scope.addToList = function () {
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity,
      };
      $scope.shoppingList2.push(newItem);
    };
  }
})();
