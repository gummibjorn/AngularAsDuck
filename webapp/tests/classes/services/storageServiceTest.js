define(['app/models/event', 'app/repositories/eventRepository', 'tests/factories/eventFactory'], function (Event, StorageService, EventFactory) {
  'use strict';

  describe('EventStorageService test suite', function() {
    var event, storageService;

    // setup
    beforeEach(function() {
      storageService = new StorageService();
      event = EventFactory.newEvent("TestLunch", "Testikon", new Date('2015-10-10T10:00:00.000Z'));
    });

    describe('get()', function() {
      beforeEach(function() {
        storageService.events.add(event);
      });

      describe('by object id', function() {
        it('returns the object', function() {
          var e = storageService.events.get(event.id)
          expect(e).toBe(event);
        });
      });

      describe('by inexistent object id', function() {
        it('returns null', function() {
          var e = storageService.events.get("hans");
          expect(e).toBe(null);
        });
      });
    });


    describe('all()', function() {
      it('returns an Array', function() {
        expect(storageService.events.all()).toEqual([]);
      });
    });

    describe('add()', function() {
      it('inserts element', function() {
        var length = storageService.events.all().length;
        var success = storageService.events.add(event);
        expect(success).toBe(true);
        expect(storageService.events.all().length).toBe(length+1);
      });

      describe('same element again', function() {
        var length;

        beforeEach(function() {
          storageService.events.add(event);
          length = storageService.events.all().length;
        });

        it('doesn\'t affect repository size', function() {
          var success = storageService.events.add(event);
          expect(success).toBe(false);
        });

        it('returns false', function() {
          var success = storageService.events.add(event);
          expect(storageService.events.all().length).toBe(length);
        });
      });
    });
  });
});
