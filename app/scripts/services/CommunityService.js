'use strict';

angular.module('moneyApp')
  .factory('CommunityService', function ($resource) {
    return $resource("http://localhost\\:3000/communities/:id", {
      id:'@id'
    }, {
      update: {
        method:"PUT"
      }
    });
  });
