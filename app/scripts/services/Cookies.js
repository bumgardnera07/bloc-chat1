(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        animation: true,
        backdrop: 'static',
        templateUrl: '/templates/usernameModal.html',
        controller: 'usernameModalCtrl',
        resolve: {
          userForm: function () {
            return this.userForm;
          }
        }
      });
    };
  }

  angular
    .module('blocChat1')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
