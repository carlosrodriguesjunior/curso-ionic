function DetailTaskController($state, todoService) {

var vm  = this;

todoService.getTodoById($state.params.id)
.then(function(result){
 vm.task = result.data;
})
.catch(function(error){
console.log(error);
});

}

DetailTaskController.$inject = ['$state', 'todoService'];

angular.module('starter')
.controller('detailTaskController', DetailTaskController)
.config(function($stateProvider){

  $stateProvider
  .state('app.detailTask', {
    url: '/detailTask/:id',
    views: {
      'menuContent': {
        templateUrl: 'modules/detailTask/detailTaskView.html',
        controller: 'detailTaskController as vm'
      }
    }
  })
});
