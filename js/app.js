/**
 * @name app
 * @description  main app object
 * @author Carlos Justiniano
 */
//angular.module('app', ['ngRoute', 'mgcrea.ngStrap'])
angular.module('app', ['ngRoute', 'ui.bootstrap'])
  .config(function($routeProvider, $locationProvider) {
    'use strict';

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/console_view.html',
        controller: 'ConsoleController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
