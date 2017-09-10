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

    $scope.metalRoofColors = [{
            name: "Dark Slate Gray",
            color: "#2F4F4F"
        },
        {
            name: "Gray",
            color: "#ccc"
        },
        {
            name: "Red",
            color: "#FF0000"
        },
        {
            name: "Orange Red",
            color: "#FF4500"
        },
        {
            name: "Navy",
            color: "#000080"
        }
    ];

    $scope.floorPlans = [{
            name: "8x8 Shed",
            img: "./img/fp/sheds-8x8.jpg"
        },
        {
            name: "8x12 Shed",
            img: "./img/fp/sheds-8x12.jpg"
        },
        {
            name: "10x12 Shed",
            img: "./img/fp/sheds-10x12.jpg"
        },
        {
            name: "10x16 Shed",
            img: "./img/fp/sheds-10x16.jpg"
        },
        {
            name: "12x16 Shed",
            img: "./img/fp/sheds-12x16.jpg"
        },
        {
            name: "12x24 Shed",
            img: "./img/fp/sheds-12x24.jpg"
        },
        {
            name: "12x20 Shed",
            img: "./img/fp/sheds-12x20.jpg"
        },
        {
            name: "14x28 Shed",
            img: "./img/fp/sheds-14x28.jpg"
        }
    ];

});
