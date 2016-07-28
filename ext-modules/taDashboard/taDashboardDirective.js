/**
 * Created by CHIDORI on 7/25/2016.
 */

angular.module('taDashboard').directive('taDashboard', function () {
    return {

            templateUrl:'ext-modules/taDashboard/taDashboardTemplate.html',
            link : function (scope,element, attrs) {
                scope.addNewWidget = function (widget) {
                    var newWidget = angular.copy(widget.settings);
                    scope.widgets.push(newWidget);



                }
                
            }
    };

});
