define(['app/models/event'], function(Event){
  "use strict";
  return function($scope, $routeParams, $location, EventRepository){
    this.scope = $scope;
    var id = $routeParams.eventId;
    EventRepository.get(id, function(event){
      $scope.event = event;
      $scope.saveText = "Save";
      $scope.saveEvent = function(){
        EventRepository.update(event, function(){
          //TODO redirect, notify user, whatever
          console.log("HOORAY");
        });
      }
    });
  }
});
