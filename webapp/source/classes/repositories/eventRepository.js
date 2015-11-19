define(['app/models/event'], function (Event) {
  return function ($http) {
    this.urls = {
      all: '/api/events',
      get: '/api/events/{eventId}',
      add: '/api/events',
      update: '/api/events/{eventId}'
    }

    /**
      * Find event by identifier
      *
      * @param string identifier
      * @return Event or null
      */
    this.get = function (identifier, onSuccess) {
      $http.get(this.urls.get.replace('{eventId}', identifier)).success(function(eventJson){
        onSuccess(Event.createEventfromJson(eventJson));
      });
    };

    /**
      * Get all events
      *
      * @return Event[]
      */
    this.all = function (onSuccess) {
      $http.get(this.urls.all).success(function(data){
        var events = data.events.map(function(eventJson){
            return Event.createEventfromJson(eventJson);
        });
        onSuccess(events);
      });
    };


    /**
      * Add event if not already in list
      * @param Event event
      * @return boolean if added successfull
      */
    this.add = function (event, onSuccess) {
      $http.post(this.urls.add, event).success(function(){
       onSuccess();
      });
    };

    this.update = function (event, onSuccess) {
      $http.post(this.urls.update.replace('{eventId}', event.id), event).success(function(){
       onSuccess();
      });
    }

  }
});
