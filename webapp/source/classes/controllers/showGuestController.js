define([], function(){
  "use strict"
  return function($scope, $routeParams, GuestRepository){
    this.scope = $scope;

    GuestRepository.get($routeParams.eventId, $routeParams.guestId, function(guest){
      this.scope.guest = guest;
    }.bind(this));
  }
})