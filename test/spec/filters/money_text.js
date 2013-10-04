'use strict';

describe('Filter: moneyText', function () {

  // load the filter's module
  beforeEach(module('moneyApp'));

  // initialize a new instance of the filter before each test
  var moneyText;
  beforeEach(inject(function ($filter) {
    moneyText = $filter('moneyText');
  }));

  it('should return the input prefixed with "moneyText filter:"', function () {
    var text = 'angularjs';
    expect(moneyText(text)).toBe('moneyText filter: ' + text);
  });

});
