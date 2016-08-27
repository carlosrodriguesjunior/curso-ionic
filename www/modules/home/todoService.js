function TodoService($http){

this.getTodo = function(){
  return $http.get('http://fda8a136.ngrok.io/api/todo');
}

this.getTodoById = function(id){
  return $http.get('http://fda8a136.ngrok.io/api/todo/'+id );
}

}

TodoService.$inject = ['$http'];

angular.module('starter')
.service('todoService',TodoService);
