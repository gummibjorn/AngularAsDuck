"use strict";

require.config({
  // base url relative to the index.html
  baseUrl: './',
  paths: {
    'frameworks/angular': 'frameworks/angular/angular.min',
    'app': 'classes'
  },
  // angular does not support async loading out of the box -> use the shim loader
  shim: {
    'frameworks/angular': {
      exports: 'angular'
    }
  }
});

define(['frameworks/angular', 'app/modules/lafete'], function (Angular, Lafete) {
});

