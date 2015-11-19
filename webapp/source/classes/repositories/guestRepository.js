define(['app/models/guest'], function (Guest) {
  return function ($http) {
    this.urls = {
      all: '/api/events/{eventId}/guests',
      get: '/api/events/{eventId}/guests/{guestId}',
      add: '/api/events/{eventId}/guests'
    }

    this.get = function (eventId, guestId, onSuccess) {
      $http.get(this.urls.get.replace('{eventId}', eventId).replace('{guestId}', guestId)).success(function(guestJson){
        onSuccess(Guest.createFromJson(guestJson));
      });
    };

    this.update = function(eventId, guestId, onSuccess){
      //Update Guest
    }

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