(function() {
    function NavBarCtrl($uibModal, Room, NewRoom) {
      var $ctrl = this;
      $ctrl.newRoom = NewRoom;
      $ctrl.open= function() {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'Modal.html',
            controller: 'ModalCtrl',
        });
      };

      this.add = Room.add(this.newRoom);
      this.roomData = Room.all;

    }

    angular
        .module('blocChat1')
        .controller('NavBarCtrl', ['$uibModal', 'Room', 'NewRoom', NavBarCtrl]);
})();
