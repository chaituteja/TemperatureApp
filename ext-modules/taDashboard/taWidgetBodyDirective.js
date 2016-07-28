/**
 * Created by CHIDORI on 7/27/2016.
 */
angular.module('taDashboard').directive('taWidgetBody',
    ['$compile',
    function ($compile) {
        return {
            templateUrl:'ext-modules/taDashboard/taWidgetBodyTemplate.html',
            link: function (scope, element, attrs) {
                var newElement = angular.element(scope.item.template);
                element.append(newElement);
                $compile(newElement)(scope);

                scope.close = function () {
                    scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
                };
            }
        };

    }
    ]);