define([], function () {
    return function ($scope, StorageService) {
        $scope.events = StorageService.events;
    }
})


