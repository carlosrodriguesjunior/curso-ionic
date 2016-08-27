angular.module('starter', ['ionic'])

var start = function() {
  angular.bootstrap(document, ['starter']);
};

ionic.Platform.ready(start);
