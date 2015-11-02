define(['app/models/event'], function (Event) {
  return function () {
    var event1 = new Event()
    event1.name = 'Lunch'
    event1.location.city = 'Rapperswil'
    event1.begin = new Date('2015-10-10T10:00:00.000Z')

    var event2 = new Event()
    event2.name = 'Dinner'
    event2.location.city = 'Zürich'
    event2.begin = new Date('2015-04-05T16:00:00.000Z')

    var event3 = new Event()
    event3.name = 'Dinner'
    event3.location.city = 'Rapperswil'
    event3.begin = new Date('2015-04-05T16:00:00.000Z')
    event3.end = new Date('2015-04-08T16:00:00.000Z')

    this.events = [
      event1,
      event2,
      event3
    ];
  }
});