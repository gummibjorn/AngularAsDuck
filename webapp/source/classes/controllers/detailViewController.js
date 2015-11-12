define([], function(){
  "use strict"
  return function($scope, $routeParams, EventRepository){
    this.scope = $scope;
    this.scope.event = EventRepository.events.get($routeParams.id);
  }
})
