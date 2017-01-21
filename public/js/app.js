angular.module('ospreypack', ['ui.router', 'angular.filter'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    //Home
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeCtrl',
      url: '/',
      resolve: {
        packs: function(homeService) {
          return homeService.getImages();
        }
      }
    })
    //Product
    .state('product', {
      templateUrl:'./views/product.html',
      controller: 'productCtrl',
      url:'/product/:id'
    })


})
