angular.module('app.controllers', [])

.controller('oracionesCtrl', function($scope) {

})

.controller('jaculatoriaCtrl', function($scope, $stateParams) {
  $scope.plantilla = $stateParams.template;
  $scope.title = $stateParams.title;
})

.controller('galerAsCtrl', function($scope) {

})

.controller('viejitosCtrl', function($scope) {

})
