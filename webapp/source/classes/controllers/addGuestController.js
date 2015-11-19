define(['app/models/guest'], function (Guest) {
  "use strict"
  return function ($scope, $routeParams, $location, GuestRepository) {
    this.scope = $scope;
    $scope.guest = new Guest();
    $scope.addGuest = function () {
      var eventId = $routeParams.eventId;
      GuestRepository.add(eventId, $scope.guest, function () {
          $location.path("/events/" + eventId);
        }
      );
    };
  }
});