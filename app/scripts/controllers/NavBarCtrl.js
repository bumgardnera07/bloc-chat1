(function() {
    function NavBarCtrl($uibModal, Room, NewRoom, $scope, $log) {
      var $ctrl = this;
      $ctrl.newRoom = NewRoom;

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

      //this.add = Room.add(this.newRoom);
      this.roomData = Room.all;

    }

    angular
        .module('blocChat1')
        .controller('NavBarCtrl', ['$uibModal', 'Room', 'NewRoom', '$scope', '$log', NavBarCtrl]);
})();
