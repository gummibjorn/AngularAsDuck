// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/eventListController'], function (Angular, EventListController) {

	// Create new empty app/module named 'lafete'
	var Lafete = Angular.module('lafete', []);
  Lafete.controller('EventListController', ['$scope', EventListController]);

	// export module to use it in other classes
	return Lafete;
});
