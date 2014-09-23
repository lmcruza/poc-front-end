'use strict';

angular.module('pocFrontEndApp')
  .controller('ThingCtrl', function ($scope, $http, $stateParams) {
  	$scope.phoneId = $stateParams.thingId;
    $scope.master = { name:'', info:'' };

    $scope.getThing = function() {
      if($scope.phoneId !== '') {
        $http.get('/api/things/' + $scope.phoneId).success(function(thing) {
          $scope.master = thing;
          $scope.thing = angular.copy($scope.master);
        });
      } else {
        $scope.thing = { name:'', info:'' };
      }
    };

    $scope.reset = function() {
      $scope.thing = angular.copy($scope.master);
    };

    $scope.editThing = function() {
      if($scope.thing.name === '') {
        return;
      }
      if($scope.phoneId !== '') {
        $http.put('/api/things/' + $scope.phoneId, $scope.thing).success(function(data) {
          $scope.master = data;
          $scope.thing = angular.copy($scope.master);
        });
      } else {
        $http.post('/api/things', $scope.thing).success(function(data) {
          $scope.master = data;
          $scope.thing = angular.copy($scope.master);
          $scope.phoneId = data._id;
        });
      }
    };

    $scope.getThing();

  });
