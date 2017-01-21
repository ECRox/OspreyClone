angular.module('ospreypack')
.controller('homeCtrl', function($scope, packs) {
  $scope.packs = packs.data
  console.log($scope.packs);
})
