angular.module('starter', ['ionic', 'ngCordova']);

var start = function () {
  angular.bootstrap(document,['starter']);
};

ionic.Platform.ready(start);
