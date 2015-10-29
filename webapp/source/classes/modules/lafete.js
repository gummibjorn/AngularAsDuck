// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/eventListController', 'app/services/storageService'], function (Angular, EventListController, StorageService) {

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', []);

    //services
    Lafete.service('StorageService', StorageService);

    //controllers
    EventListController.$inject = ['$scope', 'StorageService'];
    Lafete.controller('EventListController', EventListController);

    // export module to use it in other classes
    return Lafete;
});
