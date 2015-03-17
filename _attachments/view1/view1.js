'use strict';

angular.module('myApp.view1', ['ngRoute', 'CornerCouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.feedDb = $rootScope.server.getDB('geekjuke');
  $scope.feedDb.query("geekjuke", "feeds", { include_docs: true });
  $scope.newentry = $scope.feedDb.newDoc();

  function setError(data, status) {
    $scope.errordata = { "status": status, "data": data };
  }

  $scope.submitEntry = function() {
    $scope.newentry.save().success( function() {
      delete $scope.errordata;
      $scope.newentry = $scope.feedDb.newDoc();
      $scope.feedDb.query("geekjuke", "feeds", { include_docs: true });
    });
  };
}]);
