(function() {

  var _todos;

  function TodoFactory($http) {
    this.$http = $http
  }

  TodoFactory.prototype.setTodos = function(todos) {
    _todos = todos;
  }

  TodoFactory.prototype.getTodos = function() {
    return _todos;
  }


  TodoFactory.prototype.makeFactory = function($http) {
    return new TodoFactory($http);
  }

  TodoFactory.makeFactory.$inject = ['$http'];

  angular.module('starter')
    .factory('todoFactory', TodoFactory.makeFactory);

}())
