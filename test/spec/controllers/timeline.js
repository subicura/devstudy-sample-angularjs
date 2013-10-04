'use strict';

describe('Controller: TimelineCtrl', function () {

  // load the controller's module
  beforeEach(module('moneyApp'));

  var TimelineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimelineCtrl = $controller('TimelineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
