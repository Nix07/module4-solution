(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesTab', {
  templateUrl: 'Templates/categtab.template.html',
  bindings: {
    categories: '<'
  }
});

})();
