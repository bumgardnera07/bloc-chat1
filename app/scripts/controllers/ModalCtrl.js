(function() {
    function ModalCtrl($uibModalInstance, $scope, userForm) {
      $scope.form ={};

      $scope.submitForm = function () {
        if ($scope.form.userForm.$valid) {
            console.log('user form is in scope');
            $uibModalInstance.close('closed');
        } else {
            console.log('userform is not in scope');
        }
    };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

    }

    angular
        .module('blocChat1')
        .controller('ModalCtrl', ['$uibModalInstance', '$scope', 'userForm', ModalCtrl]);
})();
