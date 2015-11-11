define(['app/controllers/eventListController', 'libraries/angularMocks', 'app/services/storageService', 'tests/factories/eventFactory'], function (EventListController, AngularMocks, StorageService, EventFactory) {
  'use strict';

  var eventListController;

  beforeEach(AngularMocks.inject(function ($rootScope) {
    var scope = $rootScope.$new();
    var storageService = new StorageService();
    EventFactory.createTestEvents().forEach(function(event){
      storageService.events.add(event);
    });
    eventListController = new EventListController(scope, storageService);
  }));

  describe('EventListController', function () {
    describe('property scope', function () {
      it('contains 3 events', function () {
        expect(eventListController.scope.events.length).toBe(3);
      });
    });
  });
});
