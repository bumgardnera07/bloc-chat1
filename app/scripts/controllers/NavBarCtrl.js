(function() {
    function NavBarCtrl($uibModal, Room, $scope, $log, Message) {
      var $ctrl = this;

      $ctrl.open= function() {

        $scope.message = "Show Form Button Clicked";
        console.log($scope.message);

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/Modal.html',
            controller: 'ModalCtrl',
            scope: $scope,
            resolve: {
              userForm: function () {
                return $scope.userForm;
              }
            }
        });
      };

      this.roomData = Room;
      this.messages= Message;

    }

    angular
        .module('blocChat1')
        .controller('NavBarCtrl', ['$uibModal', 'Room', '$scope', '$log', 'Message', NavBarCtrl]);
})();
