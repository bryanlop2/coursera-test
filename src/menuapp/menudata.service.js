(function () {
  "use strict";
  angular
    .module("data")
    .service("MenuDataService", MenuDataService)
    .constant("ApiBasePath", " https://coursera-jhu-default-rtdb.firebaseio.com/");

  MenuDataService.$inject = ["ApiBasePath", "$http"];
  function MenuDataService(ApiBasePath, $http) {
    var service = this;

    service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "categories.json",
      });

      return response;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "menu_items.json",
        params: { category: categoryShortName },
      });
      return response;
    };
  }
})();
