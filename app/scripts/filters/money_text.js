'use strict';

angular.module('moneyApp')
  .filter('moneyText', function ($filter) {
    return function (input) {
      var ret = $filter("currency")(input, "₩");
      return ret.substring(0, ret.length - 3);
    };
  });
