define([], function(){
  "use strict";
  return function($scope, $routeParams, $location, GuestRepository){
    this.scope = $scope;
    var eventId = $routeParams.eventId;
    var guestId = $routeParams.guestId;
    GuestRepository.get(eventId, guestId, function(guest){
      $scope.guest = guest;
      $scope.saveText = "Save";
      $scope.saveGuest = function(){
        GuestRepository.update(eventId, guest, function(){
          $location.path("/events/" + eventId);
        });
      }
    });
  }
});
