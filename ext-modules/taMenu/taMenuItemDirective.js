
angular.module('taMenu').directive('taMenuItem', function () {
    return {
        require:'^taMenu',
        scope: {
            label:'@',
            icon:'@',
            route:'@'
        },
        templateUrl:'ext-modules/taMenu/taMenuItemTemplate.html',
        link: function (scope , el, attr, ctrl) {

                scope.isActive = function () {
                    return el === ctrl.getActiveElement();
                };
                
                scope.isVertical = function () {
                    return ctrl.isVertical() || el.parents('.ta-subitem-section').length > 0;
                    
                }
                el.on('click', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function () {
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    });

                });
        }
    };

});