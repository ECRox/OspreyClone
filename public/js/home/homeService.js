angular.module("ospreypack").service("homeService", function($http){
    this.getImages = function(){
      return $http({
        method: 'GET',
        url: '/getAllImages'
      })
    }
})
