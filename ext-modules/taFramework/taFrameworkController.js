/**
 * Created by CHIDORI on 7/23/2016.
 */
angular.module("taFramework").controller("taFrameworkController",
    ['$scope','$window','$timeout','$rootScope','$location',
        function ($scope,  $window,$timeout,$rootScope,$location){

            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;
            $scope.isMenuVertical = true;

            $scope.$on('ta-menu-item-selected-event', function (evt,data) {
                $scope.routeString = data.route;
                $location.path(data.route);

                checkWidth();
                broadcastMenuState();

            });

            $scope.$on('ta-menu-orientation-changed-event', function (evt, data) {
                $scope.isMenuVertical = data.isMenuVertical;

            });

            $($window).on('resize.taFramework', function () {
                $scope.$apply(function () {
                    checkWidth();
                    broadcastMenuState();

                });

            });
            $scope.$on("$destroy", function () {
                $($window).off("resize.taFramework");

            });

            var checkWidth = function () {
                var width = Math.max($(window).width(),$window.innerWidth);
                $scope.isMenuVisible = (width >= 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;

            };

            $scope.menuButtonClicked = function () {
                $scope.isMenuVisible = !$scope.isMenuVisible;
                broadcastMenuState();
                $scope.$apply();

            };

            var broadcastMenuState = function () {
                $rootScope.$broadcast('ta-menu-show',
                    {
                        show: $scope.isMenuVisible,
                        isVertical: $scope.isMenuVertical,
                        allowHorizontalToggle: !$scope.isMenuButtonVisible
                    });

            };
            
            $timeout(function () {
                checkWidth();
            },0);
        }
        
    ]);