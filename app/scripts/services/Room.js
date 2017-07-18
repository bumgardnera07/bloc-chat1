(function() {
  function Room($firebaseArray) {
    var Room = {};
    var rootRef = firebase.database().ref();
    var roomRef = rootRef.child('rooms');
    var rooms = $firebaseArray(roomRef);

    Room.currentRoom ={};
    Room.all = rooms;

    Room.setCurrentRoom = function(room) {
      Room.currentRoom = room;
    }

    Room.add = function(roomName) {
      rooms.$add(roomName)
    }

    return Room;
  }

  angular
    .module('blocChat1')
    .factory('Room', ['$firebaseArray', Room]);
})();
