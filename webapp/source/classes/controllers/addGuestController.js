define(['app/models/guest'], function (Guest) {
  "use strict"
  return function ($scope, $routeParams, $location, GuestRepository) {
    this.scope = $scope;
    $scope.guest = new Guest();
    $scope.saveText = "Add Guest"
    $scope.saveGuest = function () {
      var eventId = $routeParams.eventId;
      GuestRepository.add(eventId, $scope.guest, function () {
          $location.path("/events/" + eventId);
        }
      );
    };
  }
});