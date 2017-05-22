(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'Templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'Templates/categoriestab.template.html',
    controller: 'MenuAppController',
    controllerAs: 'mainData',
    resolve: {
     myData: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.itemDetail', {
    url: '/items/{itemId}',
    templateUrl: 'Templates/item-detail.template.html',
    controller: 'ItemController',
    controllerAs: 'itemDetail',
    resolve: {
     itemDet: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
       $stateParams.itemId
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }
  });
}
})();
