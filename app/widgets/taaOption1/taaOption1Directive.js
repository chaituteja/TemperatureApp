/**
 * Created by CHIDORI on 7/26/2016.
 */

 angular.module('app').directive ('taaOption1',
 ['dataService',
 function (dataService) {
 return {
 templateUrl: 'app/widgets/taaOption1/taaOption1Template.html',
  controller : ['$scope', '$http', function($scope, $http){
   $scope.Search = function(search){
    // Openweather api code
    // $http.get("http://api.openweathermap.org/data/2.5/weather?q="+search+"units=metric&APPID=8dd890279b73030908c6499ba9c1049d")
    $http.get("http://api.apixu.com/v1/current.json?key=ce837514ea304419b18230229162707&q="+search)
        .success(function (tempdata) {
         console.log(angular.toJson(tempdata));
         $scope.temperature = tempdata;

        })
        .error(function () {
         alert("Error");
        });
   }

  }]

 };

 }
 ]);

