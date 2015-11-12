define([], function () {
  "use strict"
  return function ($scope, EventRepository) {
    this.scope = $scope;
    EventRepository.events.all(function(events){
      this.scope.events = events;
    }.bind(this));
  }
});


