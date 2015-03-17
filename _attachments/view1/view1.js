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
  console.log($scope.feedDb);
}]);
