define([], function () {
  "use strict"
  return function ($scope, EventRepository) {
    this.scope = $scope;
    EventRepository.all(function(events){
      this.scope.events = events;
    }.bind(this));
  }
});


