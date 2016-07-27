/**
 * Created by CHIDORI on 7/24/2016.
 */
angular.module('taMenu').controller('taMenuController',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {

                $scope.isVertical = true;

                $scope.openMenuScope = null;
                $scope.showMenu = true;
                $scope.allowHorizontalToggle = true;

                this.getActiveElement = function (){
                        return $scope.activeElement;
                };
                this.setActiveElement = function (el) {
                        $scope.activeElement = el;
                };

                this.isVertical = function () {
                        return $scope.isVertical;
                        
                }

                this.setRoute = function (route) {
                        $rootScope.$broadcast('ta-menu-item-selected-event',
                            { route: route});
                };

                this.setOpenMenuScope = function (scope) {
                        $scope.openMenuScope = scope;

                };

                $scope.toggleMenuOrientation = function () {

                        if ($scope.openMenuScope)
                                $scope.openMenuScope.closeMenu();

                        $scope.isVertical = !$scope.isVertical;

                        $rootScope.$broadcast('ta-menu-orientation-changed-event',
                            { isMenuVertical: $scope.isVertical });
                };
                
                angular.element(document).bind('click', function (e) {
                        if($scope.openMenuScope && !$scope.isVertical) {
                                if ($(e.target).parent().hasClass('ta-selectable-item'))
                                        return;
                                $scope.$apply(function () {
                                        $scope.openMenuScope.closeMenu();
                                        
                                });
                                e.preventDefault();
                                e.stopPropagation();
                        }
                        
                });
                
              $scope.$on('ta-menu-show', function (evt, data) {
                        $scope.showMenu = data.show;
                        $scope.isVertical = data.isVertical;
                      $scope.allowHorizontalToggle = data.allowHorizontalToggle;
                        
                });
        }
]);