'use strict';

describe('Controller: TimelineMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('moneyApp'));

  var TimelineMenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimelineMenuCtrl = $controller('TimelineMenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
