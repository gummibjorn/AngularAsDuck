define(['app/models/event', 'tests/factories/eventFactory'], function (Event, EventFactory) {
  "use strict";
  var e;

  beforeEach(function () {
    e = EventFactory.newEvent("TestLunch", "Testikon", new Date('2015-10-10T10:00:00.000Z'));
  });

  describe('Event', function () {

    it('should have uuid', function () {
      var regex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
      expect(e.id).toMatch(regex);
    });

    describe('property begin', function () {
      it('should be gettable and settable', function () {
        e.begin = 1;
        expect(e.begin).toBe(1);
      });
    });

    describe('property end', function () {
      it('should be gettable and settable', function () {
        e.end = 2;
        expect(e.end).toBe(2);
      });
    });

  });
});
