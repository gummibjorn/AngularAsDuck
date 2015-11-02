// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/eventListController', 'app/services/storageService', 'libraries/angular/angular-route'], function (Angular, EventListController, StorageService) {

  // Create new empty app/module named 'lafete'
  var Lafete = Angular.module('lafete', ['ngRoute']);

  //services
  Lafete.service('StorageService', StorageService);

  //controllers
  EventListController.$inject = ['$scope', 'StorageService'];
  Lafete.controller('EventListController', EventListController);

  Lafete.config(function ($routeProvider) {
    $routeProvider
      .when('/list', {
        controller: 'EventListController',
        templateUrl: 'views/list.html'
      })
      .when('/api', {
        templateUrl: 'views/api.html'
      })
      .otherwise({
        redirectTo: '/list'
      });

  });

  // export module to use it in other classes
  return Lafete;
});
