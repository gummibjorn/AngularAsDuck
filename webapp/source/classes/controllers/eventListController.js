define([], function () {
  "use strict"
  return function ($scope, EventRepository) {
    this.scope = $scope;
    this.scope.events = EventRepository.events.all();
  }
});


