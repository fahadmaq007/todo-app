'use strict';

angular.module('todoApp')
    .controller('TodoCtrl', function ($scope, $rootScope, $timeout, CoreService, TodoService) {
        $scope.newTodo = { "task": "", "completed": false };
        $scope.init = function () {
            $scope.listTodos();
        };

        /* Server Calls start here */
        $scope.listTodos = function () {
            var promise = TodoService.listTodos();
            promise.then(
                function (data) {
                    if (data) {
                        $scope.todos = data;
                    }
                },
                function (reason) {
                    console.error('Failed:' + reason);
                }
            );
        };

        $scope.addTodo = function (newTodo) {
            var todo = angular.copy(newTodo);
            var promise = TodoService.addTodo(todo);
            promise.then(
                function (data) {
                    if (data) {
                        $scope.todos.push(data);
                        $scope.newTodo.task = "";
                    }
                },
                function (reason) {
                    console.error('Failed:' + reason);
                }
            );
        };

        $scope.deleteTodo = function (todo) {
            if (!todo.id) {
                return;
            }
            var promise = TodoService.deleteTodo(todo.id);
            promise.then(
                function (res) {
                    if (res) {
                        var index = $scope.todos.indexOf(todo);
                        $scope.todos.splice(index, 1);
                    }
                },
                function (reason) {
                    console.error('Failed:' + reason);
                }
            );
        };

        $scope.toggleComplete = function (todo, index) {
            console.log("before update", todo);
            var promise = TodoService.updateTodo(todo);
            promise.then(
                function (data) {
                    console.log("updated ", data);
                    //$scope.todos[index] = data;
                },
                function (reason) {
                    console.error('Failed:' + reason);
                }
            );
        };

    });
