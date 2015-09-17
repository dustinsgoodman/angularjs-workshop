(function() {
  'use strict';

  angular
    .module('angularWorkshop')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/todos/todos.html',
        controller: 'TodosController',
        controllerAs: 'todos',
        resolve: {
          todos: function (todosApi) {
            return todosApi.index().$promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
