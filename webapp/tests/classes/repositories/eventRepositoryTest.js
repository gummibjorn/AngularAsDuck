define(['app/models/event', 'app/repositories/eventRepository', 'tests/factories/eventFactory', 'libraries/angularMocks'], function (Event, EventRepository, EventFactory, AngularMocks) {
  'use strict';

  describe('EventRepository test suite', function () {
    var event, eventRepository, $http, $httpBackend;

    beforeEach(AngularMocks.inject(function ($injector) {
      $http = $injector.get('$http');
      $httpBackend = $injector.get('$httpBackend');

      eventRepository = new EventRepository($http);

      event = EventFactory.newEvent("TestLunch", "Testikon", new Date('2015-10-10T10:00:00.000Z'), 5);

      $httpBackend.when('GET', eventRepository.urls.all).respond(
        {
          "events": [
            {
              "id": 1,
              "name": "HSR-Party",
              "description": "Party an der HSR",
              "targetGroup": "Studenten",
              "contributionsDescription": "Kuchen",
              "location": {
                "name": "HSR",
                "street": "Oberseestrasse",
                "plz": 8640,
                "city": "Rapperswil"
              },
              "times": {
                "begin": "2015-11-15T19:00:00.000Z",
                "end": "2011-11-16T03:00:00.000Z"
              },
              "guests": [
                {
                  "id": 1,
                  "name": "Michael",
                  "contribution": "Schoggi-Kuchen",
                  "comment": "Bin sicher zu früh",
                  "canceled": false
                },
                {
                  "id": 2,
                  "name": "Hans",
                  "contribution": "Hotdog-Cake",
                  "comment": null,
                  "canceled": false
                }
              ]
            },
            {
              "id": 2,
              "name": "Dinner",
              "description": "Mitarbeiterdinner der HSR",
              "targetGroup": "HSR Mitarbeiter",
              "contributionsDescription": null,
              "location": {
                "name": "HSR",
                "street": "Oberseestrasse",
                "plz": 8640,
                "city": "Rapperswil"
              },
              "times": {
                "begin": "2015-11-20T18:00:00.000Z",
                "end": "2011-11-20T21:00:00.000Z"
              },
              "guests": [
                {
                  "id": 3,
                  "name": "F. Meier",
                  "contribution": null,
                  "comment": null,
                  "canceled": false
                }
              ]
            }
          ]
        }
      );

      //TODO test addEvent!
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
        expect(events.length).toBe(2);
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
