'use strict';

angular.module('moneyApp')
  .filter('fromNowText', function () {
    return function (input) {
      return moment(input).fromNow();
    };
  });
