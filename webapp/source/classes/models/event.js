define(['app/services/uuidService'], function (UuidService) {
  "use strict"

  var Event = function (id) {
    if (!id) {
      this.id = UuidService.getRandomUuid();
    } else {
      this.id = id;
    }
    this.name = ''
    this.description = ''
    this.targetGroup = ''
    this.contributionsDescription = ''
    this.maximalAmountOfGuests = ''
    this.location = {name: '', street: '', zipCode: '', city: ''};
    this.times = {begin: 0, end: 0};
    this.guests = [];

    Object.defineProperty(this, "end", {
      get: function () {
        return this.times.end
      },
      set: function (end) {
        this.times.end = end
      }
    });

    Object.defineProperty(this, "begin", {
      get: function () {
        return this.times.begin
      },
      set: function (begin) {
        this.times.begin = begin
      }
    });
  };

  Event.createEventfromJson = function (eventJson) {
    var event = new Event(eventJson.id);
    event.name = eventJson.name;
    event.description = eventJson.description;
    event.targetGroup = eventJson.targetGroup;
    event.contributionsDescription = eventJson.contributionsDescription;
    event.maximalAmountOfGuests = eventJson.maximalAmountOfGuests;
    event.location = eventJson.location;
    event.times = eventJson.times;
    return event;
  };

  Event.createEventfromForm = function(formData){
    var event = new Event();
    event.name = formData.eventname;
    event.description = formData.description;
    event.targetGroup = formData.target;
    event.location.name = formData.locationname;
    event.location.street = formData.locationstreet;
    event.location.zipCode = formData.locationplz;
    event.location.city = formData.locationcity;
    event.times.begin = new Date(formData.eventbegin);
    event.times.end = new Date(formData.eventend);
    return event;
  };

  return Event;
});
