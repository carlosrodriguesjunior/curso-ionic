function HomeController( todoService, $scope) {

this.taskList= [];
var vm = this;

this.removeTask =function(task){

  todoService.removeTodo(task._id)
  .then(function(result){
    vm.loadTasks();
  })
  .catch(function(error){
  console.log(error);
});

};

this.loadTasks = function(){

  todoService.getTodo()
  .then(function(result){
   vm.taskList = result.data;
  })
  .catch(function(error){
  console.log(error);
  })
  .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
};

$scope.$on("$ionicView.beforeEnter", function(event, data){
  vm.loadTasks();
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
