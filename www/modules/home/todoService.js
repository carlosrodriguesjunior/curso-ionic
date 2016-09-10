(function() {

  function TodoService($http) {

    this.$http = $http;

  }

  TodoService.prototype.getTodo = function() {
    return this.$http.get('http://d4604177.ngrok.io/api/todo');
  }

  TodoService.prototype.getTodoById = function(id) {
    return this.$http.get('http://d4604177.ngrok.io/api/todo/' + id);
  }

  TodoService.prototype.removeTodo = function(id) {
    return this.$http.delete('http://d4604177.ngrok.io/api/todo/' + id);
  }

  TodoService.$inject = ['$http'];

  angular.module('starter')
    .service('todoService', TodoService);

}())
