'use strict';

angular.module('todoApp')
    .service('TodoService', function ($rootScope, $q, CoreService, UrlService, $window) {

        var self = this;

        self.listTodos = function () {
            var params = {};
            var url = UrlService.todos();
            var promise = CoreService.callService(url, 'GET', undefined, params, undefined);
            return promise;
        };

        self.addTodo = function (todo) {
            var data = todo;
            var url = UrlService.todos();
            var promise = CoreService.callService(url, 'PUT', undefined, undefined, data);
            return promise;
        };

        self.updateTodo = function (todo) {
            var data = todo;
            var url = UrlService.todos();
            var promise = CoreService.callService(url, 'PUT', undefined, undefined, data);
            return promise;
        };

        self.deleteTodo = function (id) {
            var pathParam = {};
            pathParam['id'] =  id;
            var url = UrlService.todo();
            var promise = CoreService.callService(url, 'DELETE', pathParam, undefined, undefined);
            return promise;
        };

    });