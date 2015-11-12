define(['app/models/event'], function (Event) {
  return function ($http) {
    this.urls = {
      all: '/api/events',
      get: '/api/events/{eventId}',
      add: '/api/events'
    }

    /**
      * Find event by identifier
      *
      * @param string identifier
      * @return Event or null
      */
    this.get = function (identifier) {
      return null;
    };

    /**
      * Get all events
      *
      * @return Event[]
      */
    this.all = function (onSuccess) {
      $http.get(this.urls.all).success(function(data){
        onSuccess(data.events);
      });
    };


    /**
      * Add event if not already in list
      * @param Event event
      * @return boolean if added successfull
      */
    this.add = function (event) {
      return false;
    };

  }
});
