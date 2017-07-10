(function() {
    function ModalCtrl($uibModalInstance, $scope, userForm, Room) {
      $scope.form ={};

      $scope.submitForm = function () {
        if ($scope.form.userForm.$valid) {
            Room.add($scope.value);
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
        .controller('ModalCtrl', ['$uibModalInstance', '$scope', 'userForm', 'Room', ModalCtrl]);
})();
