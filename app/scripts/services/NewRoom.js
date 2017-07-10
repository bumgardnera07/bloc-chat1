(function() {
  function NewRoom() {
    var NewRoom = {value: ""};

    return NewRoom;
  }

  angular
    .module('blocChat1')
    .factory('NewRoom', NewRoom);
})();
