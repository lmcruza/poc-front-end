'use strict';

angular.module('pocFrontEndApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thing', {
        url: '/thing/:thingId',
        templateUrl: 'app/thing/thing.html',
        controller: 'ThingCtrl'
      });
  });