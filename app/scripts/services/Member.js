(function() {
  function Member($firebaseArray) {
    var Member = {};
    var rootRef = firebase.database().ref();
    var memberRef = rootRef.child('members');
    var members = $firebaseArray(memberRef);

    Member.all = members;

    Member.add = function(member) {
      Members.$add(member)
    }

    return Member;
  }

  angular
    .module('blocChat1')
    .factory('Member', ['$firebaseArray', Member]);
})();
