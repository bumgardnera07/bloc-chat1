(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.all =messages;


    Message.getByRoomId = function(roomId) {
      Message.currentMessages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }


    return Message;
    }

  angular
    .module('blocChat1')
    .factory('Message', ['$firebaseArray', Message]);
})();