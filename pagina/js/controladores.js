(function(){
    angular.module('3pm.controllers', [])
    .controller('discosController', ['$scope', 'discosService', function($scope, discosService) {
        
        discosService.all().then(function(data) {
            $scope.discos = data;
        });
    }])
    .controller('tabController', ['$scope', function($scope){
        $scope.tab = 0;
        $scope.selectTab = function(tab){
            $scope.tab = tab;
        }
    }])
})();