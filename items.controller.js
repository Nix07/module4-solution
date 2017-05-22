(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

// Version with resolving to 1 item based on $stateParams in route config
ItemController.$inject = ['$stateParams' ,'itemDet'];
function ItemController($stateParams, itemDet) {
  var itemDetail = this;
  itemDetail.itemDet = itemDet.data;

  itemDetail.getItemsForCategory = function (categoryShortName) {
    var promise = MenuDataService.getItemsForCategory(categoryShortName);

    promise.then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    })

  };
}

})();
