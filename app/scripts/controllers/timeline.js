'use strict';

angular.module('moneyApp')
  .controller('TimelineCtrl', function ($scope, ItemService) {
    $scope.items = [];
    $scope.form = {};

    ItemService.query(function(data) {
      $scope.items = data;
    });

    $scope.formSubmit = function() {
      ItemService.save($scope.form, function(data) {
        $scope.items.unshift(data);
        $scope.form = {};
      });
    }

    $scope.formCancel = function() {
      $scope.form = {};
    }

  });
