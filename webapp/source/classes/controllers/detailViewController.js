define([], function(){
  "use strict"
  return function($scope, $routeParams, EventRepository, GuestRepository){
    this.scope = $scope;
    EventRepository.get($routeParams.eventId, function(event){
      this.scope.event = event;
    }.bind(this));

    GuestRepository.all($routeParams.eventId, function(guests){
      this.scope.guests = guests;
    }.bind(this));

  }
})
