var module = angular.module('starter');

function HomeController($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
};

HomeController.$inject = ["$scope"];

module.controller('homeController', HomeController);


module.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'modules/home/homeView.html',
        controller: 'homeController'
      }
    }
  })
});
