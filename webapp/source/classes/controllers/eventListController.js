define([], function () {
  "use strict"
  return function ($scope, StorageService) {
    this.scope = $scope;
    this.scope.events = StorageService.events.all();
  }
});


