define(['app/controllers/eventListController', 'libraries/angularMocks', 'app/repositories/eventRepository', 'tests/factories/eventFactory'], function (EventListController, AngularMocks, EventRepository, EventFactory) {
  'use strict';

  var eventListController;

  beforeEach(AngularMocks.inject(function ($rootScope) {
    var scope = $rootScope.$new();
    var eventRepository = new EventRepository();
    EventFactory.createTestEvents().forEach(function(event){
      eventRepository.events.add(event);
    });
    eventListController = new EventListController(scope, eventRepository);
  }));

  describe('EventListController', function () {
    describe('property scope', function () {
      it('contains 3 events', function () {
        expect(eventListController.scope.events.length).toBe(3);
      });
    });
  });
});
