define(['app/models/event'], function (Event) {
  return function () {

    this.events = new (function() {
      var eventList = {};

      /**
      * Find event by identifier
      *
      * @param string identifier
      * @return Event or null
      */
      this.get = function(identifier) {
        return eventList[identifier] || null;
      };

      /**
      * Get all events
      *
      * @return Event[]
      */
      this.all = function() {
        return Object.keys(eventList).map(function(value, index){
          return eventList[value];
        });
      };

      /**
      * Add event if not already in list
      * @param Event event
      * @return boolean if added successfull
      */
      this.add = function(event) {
        if(eventList[event.id]){
          return false;
        } else {
          eventList[event.id] = event;
          return true;
        }
      };

      //FIXME test data; remove this
      var event1 = new Event();
      event1.name = 'Lunch';
      event1.location.city = 'Rapperswil';
      event1.begin = new Date('2015-10-10T10:00:00.000Z');

      var event2 = new Event();
      event2.name = 'Dinner';
      event2.location.city = 'Zürich';
      event2.begin = new Date('2015-04-05T16:00:00.000Z');

      var event3 = new Event();
      event3.name = 'Dinner';
      event3.location.city = 'Rapperswil';
      event3.begin = new Date('2015-04-05T16:00:00.000Z');
      event3.end = new Date('2015-04-08T16:00:00.000Z');
      this.add(event1);
      this.add(event2);
      this.add(event3);

    })();

  }
});
