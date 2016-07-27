/**
 * Created by CHIDORI on 7/24/2016.
 */
angular.module('taMenu').directive('taMenu',['$timeout', function ($timeout) {
    return {
        scope: {

        },
        transclude: true,
        templateUrl:'ext-modules/taMenu/taMenuTemplate.html',
        controller:'taMenuController',
        link: function (scope ,el, attr) {
            var item = el.find('.ta-selectable-item:first');
            $timeout(function () {
                item.trigger('click');

            });
            
        }
    };

}]);