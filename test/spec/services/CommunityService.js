'use strict';

describe('Service: CommunityService', function () {

  // load the service's module
  beforeEach(module('moneyApp'));

  // instantiate service
  var CommunityService;
  beforeEach(inject(function (_CommunityService_) {
    CommunityService = _CommunityService_;
  }));

  it('should do something', function () {
    expect(!!CommunityService).toBe(true);
  });

});
