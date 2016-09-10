(function() {
  var banana = "fruta";

  function LayoutController($scope, $ionicModal, $timeout) {

    $scope.loginData = {};

    $ionicModal.fromTemplateUrl('modules/main/loginModalView.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });


    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  }

  LayoutController.$inject = ['$scope', '$ionicModal', '$timeout'];

  angular.module('starter')
    .controller('layoutController', LayoutController)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'modules/main/layoutView.html',
          controller: 'layoutController'
        })

    });
}())
