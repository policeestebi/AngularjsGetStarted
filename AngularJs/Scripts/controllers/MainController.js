'use strict';

(function() {

    var MainController = function ($scope,$http) {

        $scope.message = "Hello from angular";


        var onUserComplete = function(response) {

            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function(response) {
            $scope.repos = response.data;
        }

        var onError = function(reason) {

            $scope.error = "Could not fetch the data";
        };

        $scope.search = function(username) {
         
            $http.get('https://api.github.com/users/' + username)
           .then(onUserComplete, onError);
        }

       

        $scope.username = "policeestebi";

    };

    angularApp.controller('MainController', ['$scope','$http', MainController]);

})();






