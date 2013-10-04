'use strict';

describe('Filter: fromNowText', function () {

  // load the filter's module
  beforeEach(module('moneyApp'));

  // initialize a new instance of the filter before each test
  var fromNowText;
  beforeEach(inject(function ($filter) {
    fromNowText = $filter('fromNowText');
  }));

  it('should return the input prefixed with "fromNowText filter:"', function () {
    var text = 'angularjs';
    expect(fromNowText(text)).toBe('fromNowText filter: ' + text);
  });

});
