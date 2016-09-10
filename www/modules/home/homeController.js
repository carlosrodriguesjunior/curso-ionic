(function() {
  var banana = "docinha";

  function HomeController(todoService, $scope) {

    this.taskList = [];

    this.todoService = todoService;
    this.$scope = $scope;

    var vm = this;
    $scope.$on("$ionicView.beforeEnter", function(event, data) {
      vm.loadTasks();
    });

  }

  HomeController.prototype.loadTasks = function() {
    var vm = this;
    vm.todoService.getTodo()
      .then(function(result) {
        vm.taskList = result.data;
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        vm.$scope.$broadcast('scroll.refreshComplete');
      });
  }

  HomeController.prototype.removeTask = function(task) {
    var vm = this;
    vm.todoService.removeTodo(task._id)
      .then(function(result) {
        vm.loadTasks();
      })
      .catch(function(error) {
        console.log(error);
      });

  };

  HomeController.$inject = ['todoService', '$scope'];

  angular.module('starter')
    .controller('homeController', HomeController)
    .config(function($stateProvider) {

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
}());
