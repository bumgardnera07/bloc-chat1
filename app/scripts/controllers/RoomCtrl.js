(function() {
    function RoomCtrl($scope, Room, Message) {
      this.roomData = Room;
      this.messages = Message;
    }

    angular
        .module('blocChat1')
        .controller('RoomCtrl', ['$scope', 'Room', 'Message', RoomCtrl]);
})();
