(function(){
    var app = angular.module('3pm', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'vistas/musica.html'
          })
      .otherwise({
        redirectTo: '/'
      });
    }]);
})();