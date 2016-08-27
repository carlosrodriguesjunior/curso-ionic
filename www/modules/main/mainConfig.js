angular.module('starter')
.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/playlists');
});
