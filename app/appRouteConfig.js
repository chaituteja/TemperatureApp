/**
 * Created by CHIDORI on 7/25/2016.
 */
angular.module('app').config(['$routeProvider', function ($routeProvider) {


    var routes = [
        {
            url: '/dashboard',
            config: {
                template: '<taa-dashboard></taa-dashboard>'
            }
        },
        {
            url: '/locations',
            config: {
                template: '<taa-locations></taa-locations>'
            }
        },
        {
            url: '/guides',
            config: {
                template: '<taa-guides></taa-guides>'

            }
        }


    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);

    });
    $routeProvider.otherwise({redirectTo:'/dashboard'});


}]);