/**
 * Created by CHIDORI on 7/25/2016.
 */
angular.module('app').directive('taaDashboard', [function () {



    return {
        scope: {
        },
        replace : true,
        // template: '<h1>Dashboard Page {{temperature}}</h1>',
        templateUrl:'app/directives/taaDashboardDirective.tpl.html',
        controller : ['$scope', '$http', function($scope, $http){
            $http.get("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=8dd890279b73030908c6499ba9c1049d")
                .success(function (tempdata) {
                    console.log(angular.toJson(tempdata));
                   $scope.temperature = tempdata;

                })
                .error(function () {
                    alert("Error");
                });
        }]

    }

}]);