// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/eventListController', 'app/controllers/detailViewController', 'app/repositories/eventRepository', 'libraries/angular/angular-route' ], function (Angular, EventListController, DetailViewController, EventRepository) {

  // Create new empty app/module named 'lafete'
  var Lafete = Angular.module('lafete', ['ngRoute']);

  //services
  Lafete.service('EventRepository', EventRepository);

  //controllers
  EventListController.$inject = ['$scope', 'EventRepository'];
  Lafete.controller('EventListController', EventListController);

  DetailViewController.$inject = ['$scope', '$routeParams', 'EventRepository'];
  Lafete.controller('DetailViewController', DetailViewController);

  Lafete.config(function ($routeProvider) {
    $routeProvider
      .when('/list', {
        controller: 'EventListController',
        templateUrl: 'views/event/list.html'
      })
      .when('/api', {
        templateUrl: 'views/api.html'
      })
      .when('/events/:id', {
        controller: 'DetailViewController',
        templateUrl: 'views/event/detail.html'
      })
      .otherwise({
        redirectTo: '/list'
      });

  });

  // export module to use it in other classes
  return Lafete;
});
