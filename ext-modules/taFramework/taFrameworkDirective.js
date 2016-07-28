/**
 * Created by CHIDORI on 7/23/2016.
 */
angular.module("taFramework").directive("taFramework", function(){
    return {
        transclude: true,
        scope: {
            title:'@',
            subtitle:'@',
            iconFile:'@',
        },
        controller: "taFrameworkController",
        templateUrl: "ext-modules/taFramework/taFrameworkTemplate.html"
    };
});