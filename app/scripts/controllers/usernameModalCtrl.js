(function() {
    function usernameModalCtrl($uibModalInstance, $scope, userForm, $cookies) {
      $scope.form ={};

      $scope.submitForm = function () {
        if ($scope.form.userForm.$valid) {
            $cookies.put('blocChatCurrentUser', ($scope.value));
            $uibModalInstance.close('closed');
            console.log($cookies.get('blocChatCurrentUser'))
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
        .controller('usernameModalCtrl', ['$uibModalInstance', '$scope', 'userForm', '$cookies', usernameModalCtrl]);
})();
