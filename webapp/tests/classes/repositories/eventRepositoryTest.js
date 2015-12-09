define(['app/models/event', 'app/repositories/eventRepository', 'tests/factories/eventFactory', 'libraries/angularMocks'], function (Event, EventRepository, EventFactory, AngularMocks) {
  'use strict';

  describe('EventRepository test suite', function () {
    var eventRepository, $http, $httpBackend;

    beforeEach(AngularMocks.inject(function ($injector) {
      $http = $injector.get('$http');
      $httpBackend = $injector.get('$httpBackend');

      eventRepository = new EventRepository($http);

      $httpBackend.when('GET', '/api/events/12').respond(404, 'non existing');

      $httpBackend.when('GET', '/api/events/2').respond(
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
      );

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
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('get()', function () {
      describe('by object id', function () {
        it('returns the object', function () {
          var repo_event = null;
          eventRepository.get(2, function (event) {
            repo_event = event;
          });
          $httpBackend.flush();
          expect(repo_event.description).toBe("Mitarbeiterdinner der HSR");
        });
      });

      describe('by inexistent object id', function () {
        it('returns null', function () {
          var repo_event = null;
          eventRepository.get(12, function (event) {
            repo_event = event;
          });
          $httpBackend.flush();
          expect(repo_event).toBe(null);
        });
      });
    });

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

    describe('add()', function () {
      it('adds an event', function () {
        var event = EventFactory.newEvent('Lunch', {city: 'Rapperswil'}, new Date('2015-04-05T16:00:00.000Z'));
        $httpBackend.expectPOST('/api/events', event).respond(200, '');

        eventRepository.add(event, function () {
        });
        $httpBackend.flush();
      });
    });

    describe('update()', function () {
      it('updates an event', function () {
        var repo_event = null;
        eventRepository.get(2, function (event) {
          repo_event = event;
        });
        $httpBackend.flush();
        repo_event.comment = 'hans has no idea';

        $httpBackend.expectPOST('/api/events/2', repo_event).respond(200, '');

        eventRepository.update(repo_event, function () {
        });
        $httpBackend.flush();
      });
    });
  });
});
