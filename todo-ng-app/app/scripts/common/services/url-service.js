'use strict';

angular.module('todoApp')
    .service('UrlService', function () {

        var self = this;
        
        var apiUri = 'http://localhost:8080';

        self.todos = function () {
            return apiUri + '/todos';
        }

        self.todo = function () {
            return self.todos() + '/{id}';
        }
    });