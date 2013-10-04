'use strict';

angular.module('moneyApp')
  .factory('ItemService', function ($resource) {
    return $resource("http://localhost\\:3000/items/:id", {
      id:'@id'
    }, {
      update: {
        method:"PUT"
      }
    });
  });
