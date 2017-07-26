(function() {
  function Message($firebaseArray, $cookies, $filter, Room) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
    var currenttime = $filter('date')(new Date(),'hh:mm:ss');
    Message.all =messages;
    Message.currentRoom = Room.currentRoom;


    Message.getByRoomId = function(roomId) {
      Message.currentMessages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage) {
      messages.$add({
          content: newMessage,
          roomId: Room.currentRoom.$id,
          sentAt: currenttime,
          username: $cookies.get('blocChatCurrentUser'),
          })


    };


    return Message;
    }

  angular
    .module('blocChat1')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', 'Room', Message]);
})();
