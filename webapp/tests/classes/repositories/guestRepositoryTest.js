define(['app/models/guest', 'app/repositories/guestRepository', 'libraries/angularMocks'], function (Guest, GuestRepository, AngularMocks) {
  'use strict';

  describe('GuestRepository', function(){
    var repo, $http, $httpBackend;
    var hansJson = '{"id":99,"name":"Hans","contribution":"Kekse","comment":"Blub","canceled":false}';
    var hans = Guest.createFromJson({"id":99,"name":"Hans","contribution":"Kekse","comment":"Blub","canceled":false});

    beforeEach(AngularMocks.inject(function ($injector) {
      $http = $injector.get('$http');
      $httpBackend = $injector.get('$httpBackend');
      repo = new GuestRepository($http);

    this.urls = {
      all: '/api/events/{eventId}/guests',
      get: '/api/events/{eventId}/guests/{guestId}',
      add: '/api/events/{eventId}/guests',
      update: '/api/events/{eventId}/guests/{guestId}'
    }

      //create test data
    }));

    afterEach(function () {
      $httpBackend.flush();
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('all()', function(){
      it('should have 2 guests', function(){
        $httpBackend.when('GET', '/api/events/1/guests').respond({"guests":[{"id":1,"name":"Michael","contribution":"Schoggi-Kuchen","comment":"Bin sicher zu früh","canceled":false},{"id":2,"name":"Hans","contribution":"Hotdog-Cake","comment":null,"canceled":false}]});

        repo.all(1,function(guests){
          console.log(guests);
          expect(guests.length).toBe(2);
          expect(guests[0].name).toBe("Michael");
          expect(guests[0].name).toBe("Michael");
        });
      });

      it('should have 0 guests', function(){
        $httpBackend.when('GET', '/api/events/1/guests').respond({"guests":[]});
        repo.all(1,function(guests){
          expect(guests.length).toBe(0);
        });
      });

      it('survives querying an inexistent event', function(){
        $httpBackend.when('GET', '/api/events/1/guests').respond(404, "Event (id 1) not found.");
        repo.all(1,function(guests){
          expect(guests.length).toBe(0);
        });
      });
    });

    describe('get()', function(){
      it('should get a specific guest', function(){
        $httpBackend.when('GET', '/api/events/1/guests/1').respond({"id":1,"name":"Michael","contribution":"Schoggi-Kuchen","comment":"Bin sicher zu früh","canceled":false});
        repo.get(1,1,function(guest){
          expect(guest.name).toBe("Michael");
          expect(guest.id).toBe(1);
        });
      });

      it('survives getting an inexistent guest of an existing event', function(){
        $httpBackend.when('GET', '/api/events/1/guests/11').respond(404, "Guest (id 11) not found.");
        repo.get(1,11,function(guest){
          expect(guest).toBe(null);
        });
      });

      it('survives getting a guest of an inexistent event', function(){
        $httpBackend.when('GET', '/api/events/11/guests/1').respond(404, "Event (id 11) not found.");
        repo.get(11,1,function(guest){
          expect(guest).toBe(null);
        });
      });
    });

    describe('add()', function(){
      it('adds a new guest to an existing event', function(){
        $httpBackend.expectPOST('/api/events/1/guests', hansJson).respond(200, hansJson);
        repo.add(1,hans, function(){});
      });

      it('adds a new guest to an inexistent event', function(){
        $httpBackend.expectPOST('/api/events/1444/guests', hansJson).respond(404, 'Event (id 1444) not found.');
        repo.add(1444, hans, function(){});
      });
    });

    describe('update()', function(){
      it('updates an existing guest', function(){
        $httpBackend.expectPOST('/api/events/1/guests/99', hansJson).respond(200, hansJson);
        repo.update(1,hans, function(){});
      });
    });

  });
});
