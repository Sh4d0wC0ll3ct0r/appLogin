'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CreateEmpleados', {
    templateUrl: 'template/CreateEmpleados/CreateEmpleados.html',
    controller: 'CreateEmpleados'
  });
}])

.controller('CreateEmpleados', [function() {

}]);