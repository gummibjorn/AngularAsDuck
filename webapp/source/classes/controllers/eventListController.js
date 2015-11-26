define([], function () {
  "use strict"
  return function ($scope, $location, EventRepository) {
    this.scope = $scope;
    EventRepository.all(function(events){
      this.scope.events = events;
    }.bind(this));

    $scope.eventDetail = function(id){
      console.log("Eventdetail " + id);
      $location.path('/events/' + id);
    }
  }
});


