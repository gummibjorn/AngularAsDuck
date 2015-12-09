require.config({
  baseUrl: './',
  paths: {
    'frameworks/angular': '../source/frameworks/angular/angular.min',
    'app': '../source/classes',
    'tests': 'classes',
    'libraries/angularMocks': 'libraries/angular/angular-mocks',
    'libraries/jasmine': ['libraries/jasmine/jasmine'],
    'libraries/jasmine-html': ['libraries/jasmine/jasmine-html'],
    'libraries/jasmine-boot': ['libraries/jasmine/boot']
  },
  shim: {
    'frameworks/angular': {
      exports: 'angular'
    },
    'libraries/angularMocks': {
      deps: ['frameworks/angular'],
      exports: 'angular.mock'
    },
    'libraries/jasmine-html': {
      deps: ['libraries/jasmine']
    },
    'libraries/jasmine-boot': {
      deps: ['libraries/jasmine', 'libraries/jasmine-html']
    }
  }
});

require(['libraries/jasmine-boot'], function () {
  require([
      'tests/controllers/eventListControllerTest',
      'tests/models/eventTest',
      'tests/repositories/eventRepositoryTest',
      'tests/repositories/guestRepositoryTest'
  ], function () {
    window.onload();
  })
});
