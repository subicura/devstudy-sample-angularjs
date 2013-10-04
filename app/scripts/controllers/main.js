'use strict';

angular.module('moneyApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.location = $location;
    $scope.logout = function() {
      location.href = "/";
    }
  });
