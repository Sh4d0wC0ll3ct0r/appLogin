'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ListEmpleados', {
    templateUrl: 'template/ListEmpleados/ListEmpleados.html',
    controller: 'ListEmpleados'
  });
}])

.controller('ListEmpleados', [function() {

}]);