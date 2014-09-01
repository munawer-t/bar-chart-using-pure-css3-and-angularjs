//! bar-chart-controllers.js
//! version : 2
//! author : munawer (@munawer_t)
//! git : https://github.com/munawer-t
//! license : MIT
//! www.munawer.in
app.controller('GraphController', function ($scope) {

        $scope.graphTwoColumnDataColors = ['blue', 'green'];
        $scope.graphTwoColumnDataLegends = ['Views', 'Uniques'];
        $scope.graphTwoColumnData = [
            {
                name: "India",
                ViewsCount: 1298,
                UniquesCount: 948,
                launchDate: 1406140200000,
                author: "Whole region"
            },
            {
                name: "US",
                ViewsCount: 1151,
                UniquesCount: 711,
                launchDate: 1404412200000,
                author: "Whole region"
            },
            {
                name: "Australia",
                ViewsCount: 471,
                UniquesCount: 261,
                launchDate: 1401352200000,
                author: "Whole region"
            },
            {
                name: "Africa",
                ViewsCount: 241,
                UniquesCount: 91,
                launchDate: 1401352200000,
                author: "Whole region"
            },
            {
                name: "UK",
                ViewsCount: 124,
                UniquesCount: 121,
                launchDate: 1401352200000,
                author: "Whole region"
            }
        ];


        $scope.graphFourColumnDataColors = ['gray', 'green', 'red', 'blue'];
        $scope.graphFourColumnDataLegends = ['linkedin', 'facebook', 'twitter', 'total' ];
        $scope.graphFourColumnData = [
            {
                name: "India",
                launchDate: 1406140200000,
                linkedinCount: 440,
                facebookCount: 200,
                twitterCount: 4,
                totalCount: 104,
                author: "Whole region"
            },
            {
                name: "UK",
                launchDate: 1401352200000,
                linkedinCount: 110,
                facebookCount: 220,
                twitterCount: 332,
                totalCount: 244,
                author: "Whole region"
            },
            {
                name: "US",
                launchDate: 1404412200000,
                linkedinCount: 33,
                facebookCount: 330,
                twitterCount: 133,
                totalCount: 331,
                author: "Whole region"
            }
        ]
    }
);
