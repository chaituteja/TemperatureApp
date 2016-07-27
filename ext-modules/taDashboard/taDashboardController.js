/**
 * Created by CHIDORI on 7/26/2016.
 */
angular.module("taDashboard").controller("taDashboardController",
    ['$scope','$http',
        function ($scope,$http){

        $http.get("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=8dd890279b73030908c6499ba9c1049d")
            .success(function (tempdata) {
                $scope.tempdate = tempdata;

            })
            .error(function () {
                alert("Error");
            });

            $scope.tempdate = "hello";

    }

]);