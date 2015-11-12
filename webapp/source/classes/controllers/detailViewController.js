define([], function(){
  "use strict"
  return function($scope, $routeParams, StorageService){
    this.scope = $scope;
    this.scope.event = StorageService.events.get($routeParams.id);
  }
})
