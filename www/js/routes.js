angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('oraciones', {
    url: '/oraciones',
    templateUrl: 'templates/oraciones.html',
    controller: 'oracionesCtrl'
  })

  .state('jaculatoria', {
    url: '/jaculatoria/:template/:title',
    templateUrl: 'templates/jaculatoria.html',
    controller: 'jaculatoriaCtrl'
  })

  .state('galerAs', {
    url: '/galerias',
    templateUrl: 'templates/galerias.html',
    controller: 'galerAsCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('viejitos', {
    url: '/viejitos',
    templateUrl: 'templates/viejitos.html',
    controller: 'viejitosCtrl'
  })

$urlRouterProvider.otherwise('/oraciones')



});
