define(['app/models/guest'], function (Guest) {
  return function ($http) {
    this.urls = {
      all: '/api/events/{eventId}/guests',
      get: '/api/events/{eventId}/guests/{guestId}',
      add: '/api/events/{eventId}/guests'
    }


    /*this.get = function (identifier, onSuccess) {
      $http.get(this.urls.get.replace('{eventId}', identifier)).success(function(eventJson){
        onSuccess(Event.createEventfromJson(eventJson));
      });
    };*/

    this.all = function (eventId, onSuccess) {
      $http.get(this.urls.all.replace('{eventId}', eventId)).success(function(data){
        var guests = data.guests.map(function(guestJson){
          return Guest.createFromJson(guestJson);
        });
        onSuccess(guests);
      });
    };

    this.add = function (eventId, guest, onSuccess) {
      $http.post(this.urls.add.replace('{eventId}', eventId), guest).success(function(){
        onSuccess();
      });
    };

  }
});