define(['app/models/event', 'app/repositories/eventRepository', 'tests/factories/eventFactory', 'libraries/angularMocks'], function (Event, EventRepository, EventFactory, AngularMocks) {
  'use strict';

  describe('EventRepository test suite', function () {
    var event, eventRepository, $http, $httpBackend;

    beforeEach(AngularMocks.inject(function ($injector) {
      $http = $injector.get('$http');
      $httpBackend = $injector.get('$httpBackend');

      eventRepository = new EventRepository($http);

      event = EventFactory.newEvent("TestLunch", "Testikon", new Date('2015-10-10T10:00:00.000Z'), 5);

      $httpBackend.when('GET', eventRepository.urls.all).respond({
        events: [{id:1, name: 'Dinner'}, {id: 2, name: 'Lunch'}]
      })
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    /*describe('get()', function() {
     beforeEach(function() {
     eventRepository.events.add(event);
     });

     describe('by object id', function() {
     it('returns the object', function() {
     var e = eventRepository.events.get(event.id)
     expect(e).toBe(event);
     });
     });

     describe('by inexistent object id', function() {
     it('returns null', function() {
     var e = eventRepository.events.get("hans");
     expect(e).toBe(null);
     });
     });
     });*/


    describe('all()', function () {
      it('returns an Array', function () {
        var events = null;
        eventRepository.all(function (eventList) {
          events = eventList;
        });
        $httpBackend.flush();
        expect(events).toEqual(jasmine.any(Array));
      });
      it('returns two Events', function () {
        var events = null;
        eventRepository.all(function (eventList) {
          events = eventList;
        });
        $httpBackend.flush();
        var json = JSON.parse(events);
        expect(json.events.length).toBe(2);
      });
    });


    /*describe('add()', function() {
     it('inserts element', function() {
     var length = eventRepository.events.all().length;
     var success = eventRepository.events.add(event);
     expect(success).toBe(true);
     expect(eventRepository.events.all().length).toBe(length+1);
     });

     describe('same element again', function() {
     var length;

     beforeEach(function() {
     eventRepository.events.add(event);
     length = eventRepository.events.all().length;
     });

     it('doesn\'t affect repository size', function() {
     var success = eventRepository.events.add(event);
     expect(success).toBe(false);
     });

     it('returns false', function() {
     var success = eventRepository.events.add(event);
     expect(eventRepository.events.all().length).toBe(length);
     });
     });
     });*/
  });
});
