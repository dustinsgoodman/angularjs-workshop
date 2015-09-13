(function() {
  'use strict';

  angular
    .module('angularWorkshop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
