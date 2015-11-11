define(['app/models/event'], function (Event) {
  return function () {

    this.events = new (function () {
      var eventList = {};

      /**
       * Find event by identifier
       *
       * @param string identifier
       * @return Event or null
       */
      this.get = function (identifier) {
        return eventList[identifier] || null;
      };

      /**
       * Get all events
       *
       * @return Event[]
       */
      this.all = function () {
        return Object.keys(eventList).map(function (value, index) {
          return eventList[value];
        });
      };


      /**
       * Add event if not already in list
       * @param Event event
       * @return boolean if added successfull
       */
      this.add = function (event) {
        if (eventList[event.id]) {
          return false;
        } else {
          eventList[event.id] = event;
          return true;
        }
      };
    })();

  }
});
