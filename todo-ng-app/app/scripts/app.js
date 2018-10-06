'use strict';

var app = angular
    .module('todoApp', [
        'ngAnimate',
        'ngRoute',
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function ($urlRouterProvider, $stateProvider, $httpProvider) {
        $stateProvider
            .state('todos', {
                url: '/todos',
                templateUrl: 'scripts/todo/views/todo-list.html',
                controller: 'TodoCtrl'
            });

        $urlRouterProvider.otherwise('/todos');
    }])
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });
