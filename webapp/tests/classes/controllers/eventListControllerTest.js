define(['app/controllers/eventListController',
  'libraries/angularMocks',
  'app/repositories/eventRepository',
  'tests/factories/eventFactory'],
  function (EventListController, AngularMocks, EventRepository, EventFactory) {
  'use strict';

  var scope, eventRepository, $httpBackend;

  beforeEach(AngularMocks.inject(function ($injector) {
      scope = $injector.get('$rootScope').$new();

      var events = EventFactory.createTestEvents();

      eventRepository = {
        all: function(onSuccess){
          onSuccess(events);
        }
      }
  }));

  describe('EventListController', function () {
    describe('property scope', function () {
      it('contains 3 events', function () {
        var eventListController = new EventListController(scope,location, eventRepository);
        expect(eventListController.scope.events.length).toBe(3);
      });
      it('location is Rapperswil of first event', function () {
        var eventListController = new EventListController(scope,location, eventRepository);
        expect(eventListController.scope.events[0].location.city).toBe("Rapperswil");
      });
    });
  });
});
