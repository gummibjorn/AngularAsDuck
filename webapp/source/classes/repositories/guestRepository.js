define(['app/models/guest'], function (Guest) {
  return function ($http) {
    this.urls = {
      all: '/api/events/{eventId}/guests',
      get: '/api/events/{eventId}/guests/{guestId}',
      add: '/api/events/{eventId}/guests',
      update: '/api/events/{eventId}/guests/{guestId}'
    }

    this.get = function (eventId, guestId, onSuccess, onError) {
      onError = onError || function(){};
      $http.get(this.urls.get.replace('{eventId}', eventId).replace('{guestId}', guestId))
        .success(function(guestJson){
          onSuccess(Guest.createFromJson(guestJson));
        })
        .error(onError);
    };

    this.update = function(eventId, guest, onSuccess, onError){
      onError = onError || function(){};
      $http.post(this.urls.update.replace('{eventId}', eventId).replace('{guestId}', guest.id), guest)
        .success(function(){
          onSuccess();
        })
        .error(onError);
    }

    this.all = function (eventId, onSuccess, onError) {
      onError = onError || function(){};
      $http.get(this.urls.all.replace('{eventId}', eventId)).success(function(data){
        var guests = data.guests.map(function(guestJson){
          return Guest.createFromJson(guestJson);
        });
        guests = guests.filter(function(guest){
          if(!guest.canceled){
            return guest;
          }
        });
        onSuccess(guests);
      })
      .error(onError);
    };

    this.add = function (eventId, guest, onSuccess, onError) {
      onError = onError || function(){};
      $http.post(this.urls.add.replace('{eventId}', eventId), guest).success(function(){
        onSuccess();
      })
      .error(onError);
    };

  }
});
