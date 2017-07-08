(function() {
    function RoomCtrl(Room) {
      this.roomData = Room.all;
    }

    angular
        .module('blocChat1')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
