/**
 * Created by CHIDORI on 7/24/2016.
 */
angular.module('taMenu').directive('taMenuGroup', function () {
    return {
        require:'^taMenu',
        transclude: true,
        scope: {
            label:'@',
            icon:'@'
        },
        templateUrl:'ext-modules/taMenu/taMenuGroupTemplate.html',
        link: function (scope, el, attrs, ctrl) {
            scope.isOpen = false;
            scope.closeMenu = function () {
                scope.isOpen = false;

            };
            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;

                if(el.parents('.ta-subitem-section').length == 0)
                    scope.setSubmenuPosition();

                ctrl.setOpenMenuScope(scope);
            };
            scope.isVertical = function () {
                return ctrl.isVertical() || el.parents('.ta-subitem-section').length > 0;

            };

            scope.setSubmenuPosition = function () {
                var pos = el.offset();
                $('.ta-subitem-section').css({'left': pos.left + 20, 'top':36});

            };
        }
    };

});