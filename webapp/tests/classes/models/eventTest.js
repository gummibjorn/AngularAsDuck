define(['app/models/event'], function (Event) {
  "use strict";

  describe('Event', function () {
    var e = new Event();

    describe('uuid of event', function(){
      it('should have uuid', function(){
        var regex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
        expect(e.id).toMatch(regex);
      });
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
