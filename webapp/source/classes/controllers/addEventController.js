define(['app/models/event'], function(Event){
  "use strict";
  return function($scope, $location, EventRepository){
    this.scope = $scope;
    $scope.event = new Event();
    $scope.saveText = "Create";
    $scope.saveEvent = function(){
      EventRepository.add($scope.event, function(){
        $location.path('/list')
      });
    };
  }
});
