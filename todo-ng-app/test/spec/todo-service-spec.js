'use strict';

describe('TodoService Unit Test', function () {

    var TodoService;
    var mockCoreService;
    var $rootScope;
    var $q;
    var deferred;

    beforeEach(module('todoApp', 'test-templates'));

    beforeEach(function () {
        mockCoreService = {
            callService: function(url, method, pathParam,  queryParams, data) {
                deferred.resolve(user);
                return deferred.promise;
            }
        };

        module(function ($provide) {
            $provide.value('CoreService', mockCoreService);
        });
    });

})

