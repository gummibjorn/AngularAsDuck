define([], function(){
  "use strict"
  return function($scope, $routeParams, EventRepository){
    this.scope = $scope;
    EventRepository.get($routeParams.id, function(event){
      this.scope.event = event;
    }.bind(this));
  }
})
