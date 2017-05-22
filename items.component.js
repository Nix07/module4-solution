(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'Templates/menuitems.template.html',
  bindings: {
    items: '<'
  }
});

})();
