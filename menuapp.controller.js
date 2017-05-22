(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['MenuDataService'];
function MenuAppController(MenuDataService) {
  var mainData = this;

  var promise = MenuDataService.getAllCategories();
      promise.then(function (response){
        mainData.categories = response.data;
      })
      .catch(function(error) {
        console.log("Error");
      });

      mainData.getItemsForCategory = function (categoryShortName) {
        var promise = MenuDataService.getItemsForCategory(categoryShortName);

        promise.then(function (response) {
        })
        .catch(function (error) {
          console.log(error);
        })

      };
}
})();
