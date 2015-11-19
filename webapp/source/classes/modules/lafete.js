// declare dependency to angular (similar to import in java)
define(['frameworks/angular',
    'app/controllers/eventListController',
    'app/controllers/detailViewController',
    'app/controllers/addEventController',
    'app/controllers/addGuestController',
    'app/repositories/eventRepository',
    'app/repositories/guestRepository',
    'libraries/angular/angular-route'],
  function (Angular, EventListController, DetailViewController, AddEventController, AddGuestController, EventRepository, GuestRepository) {

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', ['ngRoute']);

    //services
    EventRepository.$inject = ['$http'];
    Lafete.service('EventRepository', EventRepository);

    GuestRepository.$inject = ['$http'];
    Lafete.service('GuestRepository', GuestRepository);

    //controllers
    EventListController.$inject = ['$scope', 'EventRepository'];
    Lafete.controller('EventListController', EventListController);

    DetailViewController.$inject = ['$scope', '$routeParams', 'EventRepository', 'GuestRepository'];
    Lafete.controller('DetailViewController', DetailViewController);

    AddEventController.$inject = ['$scope', '$location', 'EventRepository'];
    Lafete.controller('AddEventController', AddEventController);

    AddGuestController.$inject = ['$scope','$routeParams', '$location', 'GuestRepository'];
    Lafete.controller('AddGuestController', AddGuestController);

    Lafete.config(function ($routeProvider) {
      $routeProvider
        .when('/list', {
          controller: 'EventListController',
          templateUrl: 'views/event/list.html'
        })
        .when('/api', {
          templateUrl: 'views/api.html'
        })
        .when('/events/:eventId', {
          controller: 'DetailViewController',
          templateUrl: 'views/event/detail.html'
        })
        .when('/addEvent', {
          controller: 'AddEventController',
          templateUrl: 'views/event/addEvent.html'
        })
        .when('/events/:eventId/guests', {
          controller: 'AddGuestController',
          templateUrl: 'views/event/addGuest.html'
        })
        .otherwise({
          redirectTo: '/list'
        });

    });

    // export module to use it in other classes
    return Lafete;
  });
