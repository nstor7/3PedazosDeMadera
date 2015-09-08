(function(){
    angular.module('3pm.services', [])
        .factory('discosService', ['$http', '$q', function ($http, $q){
            function all(){
                var deferred = $q.defer();
                
                $http.get('/discos.json')
                .success(function(data){
                    deferred.resolve(data);
                });
                
                return deferred.promise;
            };
            return {
                all: all
            };
        }]);
})();