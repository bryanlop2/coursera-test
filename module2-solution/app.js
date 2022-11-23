(function () {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCon = this;
    toBuyCon.toBuy = ShoppingListCheckOffService.getItems();

    toBuyCon.buyItem = function (itemIndex) {
      try {
        ShoppingListCheckOffService.buyItem(itemIndex);
      } catch (error) {
        toBuyCon.errorMessage = error.message;
      }
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bougthCon = this;
    bougthCon.bought = ShoppingListCheckOffService.getBougthItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [
      { name: "Cookies", quantity: 10 },
      { name: "Milk", quantity: 4 },
      { name: "Oreo", quantity: 20 },
      { name: "Ice cream", quantity: 4 },
      { name: "Pepsi", quantity: 6 },
    ];
    var bougth = [];

    service.buyItem = function (itemIndex) {
      bougth.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return toBuy;
    };

    service.getBougthItems = function () {
      return bougth;
    };
  }
})();
