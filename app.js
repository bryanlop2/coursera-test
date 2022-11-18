// var student = {
//   name: "",
//   type: "student",
// };

// document.addEventListener("DOMContentLoaded", contentLoaded);

// function contentLoaded(event) {
//   document.getElementById("name").addEventListener("keyup", keyup);
// }

// function keyup(event) {
//   calculateNumericOutput();
// }

// function calculateNumericOutput() {
//   student.name = document.getElementById("name").value;

//   var totalNameValue = 0;
//   for (var i = 0; i < student.name.length; i++) {
//     totalNameValue += student.name.charCodeAt(i);
//   }

//   var output = "Total numeric value of person's name is " + totalNameValue;
//   document.getElementById("output").innerText = output;
// }

(function () {
  "use strict";

  angular
    .module("NameCalculator", [])
    .controller("NameCalculatorController", function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;
      $scope.displayNumeric = function () {
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calculateNumericForString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      }
    });
})();
