define(['app/models/event'], function(Event){
  "use strict"
  return function($scope, $location, EventRepository){
    this.scope = $scope;
    $scope.addEvent = function(){
      var event = Event.createEventfromForm($scope);
      EventRepository.add(event, function(){
           $location.path('#/list')
        }
      );
    };
  }
});