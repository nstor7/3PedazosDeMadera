(function(){
    var app = angular.module('3pm', ['ngRoute', '3pm.services', '3pm.controllers']);

    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'vistas/home.html'
      })
    .when('/musica', {
      templateUrl: 'vistas/musica.html',
      controller: 'discosController'
    })
.otherwise({
  redirectTo: '/'
    });
}]);
})();