/**
 * Created by CHIDORI on 7/25/2016.
 */
angular.module('app').directive('taaDashboard', [function () {
    return {
        scope: {
        },
        template: '<ta-dashboard> </ta-dashboard>',

        link: function (scope) {

            scope.title = 'My First Dashboard';

            scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: true,
                swapping: false
            };

            scope.widgetDefinitions =[
                {
                    title:'Add City',
                    settings:{
                        title: 'First',
                        sizeX: 3,
                        sizeY: 4,
                        minSizeX:2,
                        minSizeY:2,
                        template:'<taa-option1></taa-option1>'
                    }
                }
            ];

            scope.widgets = [
                {
                    title: 'First',
                    sizeX: 3,
                    sizeY: 4,
                    minSizeX:2,
                    minSizeY:2,
                    row: 0,
                    col: 0,
                    template:'<taa-option1></taa-option1>'

                }


            ];
        }
    }
}]);