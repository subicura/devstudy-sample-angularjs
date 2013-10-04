'use strict';

angular.module('moneyApp')
  .controller('TimelineMenuCtrl', function ($scope, CommunityService) {
    $scope.communities = [];

    CommunityService.query(function(data) {
      $scope.communities = data;
    });

    $scope.createCommunity = function() {
      var newName = prompt("새로운 커뮤니티 이름을 입력해주세요.", "default");
      if($.trim(newName).length > 0) {
        CommunityService.save({
          name:newName
        }, function(data) {
          $scope.communities.push(data);
        });
      }
    }

    $scope.updateName = function(community) {
      var newName = prompt("새로운 이름을 입력해주세요.", community.name);
      if($.trim(newName).length > 0) {
        CommunityService.update({ 
          id:community.id, 
          name:newName
        }, function(data) {
          community.name = data.name;
        });
      }
    }
  });
