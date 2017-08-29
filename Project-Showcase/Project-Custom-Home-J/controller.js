var app = angular.module('InsideMapsWoodtex', ['ui.bootstrap']);
app.controller('MainCtrl', function($scope) {
    console.log("Hey");

    $scope.sheds = [{
            name: "The Heritage",
            image: "./img/h1.jpg"
        },
        {
            name: "The Original",
            image: "./img/h2.jpg"
        },
        {
            name: "The Sanford",
            image: "./img/h3.jpg"
        },
        {
            name: "The Lincoln",
            image: "./img/h4.jpg"
        }, {
            name: "The Standard",
            image: "./img/h5.jpg"
        },
        {
            name: "The Haven",
            image: "./img/h6.jpg"
        },
        {
            name: "The Classic",
            image: "./img/h7.jpg"
        }
    ];

});
