function HomeController( todoService, $scope) {

this.taskList= [];
var vm = this;


$scope.$on("$ionicView.beforeEnter", function(event, data){
  todoService.getTodo()
  .then(function(result){
   vm.taskList = result.data;
  })
  .catch(function(error){
  console.log(error);
  });
});

}

HomeController.$inject = ['todoService','$scope'];

angular.module('starter')
.controller('homeController', HomeController)
.config(function($stateProvider){

  $stateProvider
  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'modules/home/homeView.html',
        controller: 'homeController as vm'
      }
    }
  })
});
