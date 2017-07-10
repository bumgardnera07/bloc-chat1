(function() {
    function ModalCtrl($uibModalInstance) {
      var $ctrl= this;

      $ctrl.ok = function () {
        $uibmodalInstance.close();
      };

      $ctrl.cancel = function () {
        $uibmodalInstance.dismiss('cancel');
      };

    }

    angular
        .module('blocChat1')
        .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();
