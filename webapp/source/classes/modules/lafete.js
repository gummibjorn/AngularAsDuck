// declare dependency to angular (similar to import in java)
define(['angular'], function (Angular) {

	// Create new empty app/module named 'lafete'
	var Lafete = Angular.module('lafete', []);

	// export module to use it in other classes
	return Lafete;
});
