angular.module('mainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    onEnter: function($state) {
      $state.go('about');
    },
  })

  .state('about', {
    url: '/',
    templateUrl: './views/about.html'
  })

  .state('work', {
    url: '/work',
    templateUrl: './views/concepts.html'
  })

  .state('404', {
    templateUrl: './views/404.html'
  });

  $urlRouterProvider.otherwise(function ($injector, $location) {
    $injector.invoke(['$state', function ($state) { $state.go('work'); }]);
    return true;
  });

  $locationProvider.html5Mode(true);

});
