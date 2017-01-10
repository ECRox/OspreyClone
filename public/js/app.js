angular.module('ospreypack', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    //Home
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    //Product
    .state('product', {
      templateUrl:'./views/product.html',
      controller: 'productCtrl',
      url:'/product/:id'
    })


})
