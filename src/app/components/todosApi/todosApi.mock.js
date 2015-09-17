beforeEach(function() {
  'use strict';

  module(function($provide) {
    $provide.factory('$mockNgResource', mockNgResource);
  });

  function mockNgResource($defer) {
    return function $mockNgResource(isGet) {
      var deferred, fn;
      isGet = !!isGet;

      if (isGet) {
        fn = function (params, success, error) {
          deferred = $defer();
          return { $promise: deferred().then(success, error) };
        };
      } else {
        fn = function (params, postData, success, error) {
          deferred = $defer();
          return { $promise: deferred().then(success, error) };
        };
      }

      fn.$resolve = function () {
        deferred.$resolve.apply(undefined, arguments);
      };

      fn.$reject = function () {
        deferred.$reject.apply(undefined, arguments);
      };

      return fn;
    };
  }
});
