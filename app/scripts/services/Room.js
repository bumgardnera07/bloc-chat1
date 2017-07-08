(function() {
  function Room($firebaseArray) {
    var Room = {};
    var rootRef = firebase.database().ref();
    var roomRef = rootRef.child('rooms');
    var rooms = $firebaseArray(roomRef);

    Room.all = rooms;

    return Room;
  }

  angular
    .module('blocChat1')
    .factory('Room', ['$firebaseArray', Room]);
})();
