//! bar-chart-directives.js
//! version : 2
//! author : munawer (@munawer_t)
//! git : https://github.com/munawer-t
//! license : MIT
//! www.munawer.in
var app = angular.module("myapp", []);

app.directive("bargraphTwoColumn", function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            data: "=data",
            colors: "=colors",
            legends: "=legends"
        },
        templateUrl: 'graph/bar/twocolumn',
        controller: ['$scope', function ($scope) {

            $scope.$watch('data', function (n) {
                $scope.xAxis = [];
                $scope.noDataPlaceHolder = '';

                if (!$scope.data) {
                    return;
                }

                var xTop = 100;
                if ($scope.data.length > 0) {
                    xTop = ( ($scope.data[0][$scope.legends[0] + "Count"]) > ($scope.data[0][$scope.legends[1] + "Count"]) ) ?
                        $scope.data[0][$scope.legends[0] + "Count"] : $scope.data[0][$scope.legends[1] + "Count"];
                    xTop = ((xTop % 100) > 0) ? xTop - (xTop % 100) + 100 : xTop;
                } else {
                    $scope.noDataPlaceHolder = 'No data available';
                    return;
                }
                var unit = xTop / 5;
                var nextRound = 100;


                var xValue = 0;
                for (var i = 0; i < 6; i++) {
                    $scope.xAxis.push(xValue);
                    xValue = xValue + unit;
                    if (unit > 100) {
                        xValue = ((xValue % nextRound) > 0) ? xValue - (xValue % nextRound) + nextRound : xValue;
                    } else {
                        xValue = Math.round(xValue);
                    }
                }
                $scope.xAxis.reverse();
                $scope.showGraphValue = function (itemCount) {
                    return itemCount / $scope.xAxis[0] * 100;
                }
            });

        }]
    };
});


app.directive("bargraphFourColumn", function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            data: "=data",
            colors: "=colors",
            legends: "=legends"
        },
        templateUrl: 'graph/bar/fourcolumn',
        controller: ['$scope', function ($scope) {
            $scope.$watch('data', function (n) {
                $scope.noDataPlaceHolder = '';
                $scope.xAxis = [];

                if (!$scope.data) {
                    return;
                }

                var xTop = 100;
                if ($scope.data.length > 0) {
                    xTop = Math.max(($scope.data[0][$scope.legends[0] + "Count"]), ($scope.data[0][$scope.legends[1] + "Count"]),
                        ($scope.data[0][$scope.legends[2] + "Count"]), ($scope.data[0][$scope.legends[3] + "Count"]));
                    xTop = ((xTop % 100) > 0) ? xTop - (xTop % 100) + 100 : xTop;
                } else {
                    $scope.noDataPlaceHolder = 'No data available'
                    return;
                }
                var unit = xTop / 5;
                var nextRound = 100;

                var xValue = 0;
                for (var i = 0; i < 6; i++) {
                    $scope.xAxis.push(xValue);
                    xValue = xValue + unit;
                    if (unit > 100) {
                        xValue = ((xValue % nextRound) > 0) ? xValue - (xValue % nextRound) + nextRound : xValue;
                    } else {
                        xValue = Math.round(xValue);
                    }
                }
                $scope.xAxis.reverse();

                $scope.showGraphValue = function (itemCount) {
                    ;
                    return itemCount / $scope.xAxis[0] * 100;
                }
            });
        }
        ]
    };

});

app.directive('collapseBtn', function () {
    return {
        restrict: 'A',
        template: '',
        link: function (scope, el, attrs) {
            $(el).on('click', function () {
                $(el).closest('.panel-head').next().fadeToggle();
                if ($(el).html() == '-') {
                    $(el).html('+');
                } else {
                    $(el).html('-')
                }
            });
        }
    };
});


/**
 * Templates for directives
 */
angular.module('myapp').run(['$templateCache', function ($templateCache) {

    $templateCache.put('graph/bar/twocolumn', '<div class="bar-chart">\n' +
        '<div class="bar-chart-body clearfix">{{noDataPlaceHolder}}\n' +
        '<div class="bar-chart-x">\n' +
        '<p ng-repeat="item in xAxis">{{item}}</p>\n' +
        '</div>\n' +
        '<div class="bar-container">\n' +
        '<div  ng-repeat="item in data" class="col-bar">\n' +
        '<div class="bar-holder  ">\n' +
        '<div class="bar-progress {{colors[0]}}"  style="height:{{showGraphValue(item[legends[0]+\'Count\'])}}%">\n' +
        '<figure class="bar-dig" ></figure>\n' +
        '<figure class="bar-dig" ></figure>\n' +
        '<div class="gs-tooltip">\n' +
        '{{item[legends[0]+"Count"]}} {{legends[0]}}\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="bar-holder">\n' +
        '<div class="bar-progress {{colors[1]}}"  style="height:{{showGraphValue(item[legends[1]+\'Count\'])}}%">\n' +
        '<figure class="bar-dig"></figure>\n' +
        '<figure class="bar-dig"></figure>\n' +
        '<div class="gs-tooltip">\n' +
        '{{item[legends[1]+"Count"]}} {{legends[1]}}\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="bar-char-data">\n' +
        '<div ng-repeat="item in data" class="col-bar">\n' +
        '<p class="y-ax">{{item.name}}</p>\n' +
        '<p ng-if="item.author">{{item.author}}</p>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>');


    $templateCache.put('graph/bar/fourcolumn', '<div class="bar-chart four-column">\n' +
        '<div class="bar-chart-body clearfix">{{noDataPlaceHolder}}\n' +
        '<div class="bar-chart-x">\n' +
        '<p ng-repeat="item in xAxis">{{item}}</p>\n' +
        '</div>\n' +
        '<div class="bar-container">\n' +
        '<div  ng-repeat="item in data" class="col-bar">\n' +
        '<div class="bar-holder  ">\n' +
        '<div class="bar-progress {{colors[0]}}"  style="height:{{showGraphValue(item[legends[0]+\'Count\'])}}%">\n' +
        '<figure class="bar-dig" ></figure>\n' +
        '<figure class="bar-dig" ></figure>\n' +
        '<div class="gs-tooltip">\n' +
        '{{item[legends[0]+"Count"]}} {{legends[0]}}\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="bar-holder">\n' +
        '<div class="bar-progress {{colors[1]}}"  style="height:{{showGraphValue(item[legends[1]+\'Count\'])}}%">\n' +
        '<figure class="bar-dig"></figure>\n' +
        '<figure class="bar-dig"></figure>\n' +
        '<div class="gs-tooltip">\n' +
        '{{item[legends[1]+"Count"]}} {{legends[1]}}\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="bar-holder">\n' +
        '<div class="bar-progress {{colors[2]}}"  style="height:{{showGraphValue(item[legends[2]+\'Count\'])}}%">\n' +
        '<figure class="bar-dig"></figure>\n' +
        '<figure class="bar-dig"></figure>\n' +
        '<div class="gs-tooltip">\n' +
        '{{item[legends[2]+"Count"]}} {{legends[2]}}\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="bar-holder">\n' +
        '<div class="bar-progress {{colors[3]}}"  style="height:{{showGraphValue(item[legends[3]+\'Count\'])}}%">\n' +
        '<figure class="bar-dig"></figure>\n' +
        '<figure class="bar-dig"></figure>\n' +
        '<div class="gs-tooltip">\n' +
        '{{item[legends[3]+"Count"]}} {{legends[3]}}\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="bar-char-data">\n' +
        '<div ng-repeat="item in data" class="col-bar">\n' +
        '<p class="y-ax">{{item.name}}</p>\n' +
        '<p ng-if="item.author">{{item.author}}</p>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>');

}]);