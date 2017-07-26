(function() {
    function RoomCtrl($scope, Room, Message) {
      this.roomData = Room;
      this.messages = Message;

      this.send = function(message) {
      Message.send(message)
      $scope.usermessage = "";
    }
  }

    angular
        .module('blocChat1')
        .controller('RoomCtrl', ['$scope', 'Room', 'Message', RoomCtrl]);
})();
