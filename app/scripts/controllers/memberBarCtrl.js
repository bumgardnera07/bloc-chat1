(function() {
    function memberBarCtrl(Member, $scope) {
      this.memberData = Member.all;
    }

    angular
        .module('blocChat1')
        .controller('memberBarCtrl', ['$scope', 'Member', memberBarCtrl]);
})();
