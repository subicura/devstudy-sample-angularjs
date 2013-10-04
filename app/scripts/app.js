'use strict';

angular.module('moneyApp', ['ngResource'])
  .config(function ($locationProvider, $routeProvider) {
    $routeProvider
      .when('/app', {
        templateUrl: '/views/timeline.html',
        controller: 'TimelineCtrl'
      })
      .when('/app/report', {
        templateUrl: '/views/report.html',
        controller: 'ReportCtrl'
      })
      .when('/app/calendar', {
        templateUrl: '/views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/app/setting', {
        templateUrl: '/views/setting.html',
        controller: 'SettingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  });
