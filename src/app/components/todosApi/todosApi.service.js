(function () {
  'use strict';

  angular
    .module('angularWorkshop')
    .factory('todosApi', todosApi);

  todosApi.$inject = ['$resource'];
  function todosApi($resource) {
    var baseUri = 'https://angularjs-workshop-api.herokuapp.com',
        headers = {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        };

    return $resource(baseUri + '/v1/todos/:id', null, {
      'index': {
        method: 'GET',
        headers: headers
      },
      'create': {
        method: 'POST',
        headers: headers
      },
      'update': {
        method: 'PUT',
        headers: headers,
        params: {
          id: '@id'
        }
      },
      'destroy': {
        method: 'DELETE',
        headers: headers,
        params: {
          id: '@id'
        }
      }
    });
  }
})();
