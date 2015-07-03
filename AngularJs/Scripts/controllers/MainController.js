'use strict';

(function() {

    var MainController = function ($scope,$http,$interval,$log,github) {

        $scope.message = "Hello from angular";


        var onUserComplete = function(data) {

            $scope.user = data;
            github.getRepos($scope.user)
                .then(onRepos, onError);
        };

        var onRepos = function(data) {
            $scope.repos = data;
        }

        var onError = function(reason) {

            $scope.error = "Could not fetch the data";
        };

        $scope.search = function(username) {
            $log.info('Searchin for ' +  username);
            github.getUser(username)
           .then(onUserComplete, onError);

            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }

        }

        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
                
            }

        };

        var countdownInterval = null;

        var startCountdown = function() {
            countdownInterval =  $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.username = "policeestebi";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;

        startCountdown();
    };

    angularApp.controller('MainController', ['$scope', '$http', '$interval', '$log', 'github', MainController]);

})();






