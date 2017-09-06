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

    $scope.slidingColors = [{
            name: "Maroon",
            color: "#a94442"
        },
        {
            name: "Red",
            color: "#FF0000"
        },
        {
            name: "Yellow",
            color: "#FFFF00"
        },
        {
            name: "Gray",
            color: "#ccc"
        },
        {
            name: "Teal",
            color: "#008080"
        },
        {
            name: "orange red",
            color: "#FF4500"
        },
        {
            name: "dark orange",
            color: "#FF8C00"
        },
        {
            name: "dark slate gray",
            color: "#2F4F4F"
        },
        {
            name: "navy",
            color: "#000080"
        },
        {
            name: "deep pink",
            color: "#FF1493"
        }
    ];

});
