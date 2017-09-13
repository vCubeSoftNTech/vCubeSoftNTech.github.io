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
        },
        {
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
            img: "./img/fp/sheds-8x8.jpg",
            dt: "fp1"
        },
        {
            name: "8x12 Shed",
            img: "./img/fp/sheds-8x12.jpg",
            dt: "fp2"
        },
        {
            name: "10x12 Shed",
            img: "./img/fp/sheds-10x12.jpg",
            dt: "fp3"
        },
        {
            name: "10x16 Shed",
            img: "./img/fp/sheds-10x16.jpg",
            dt: "fp4"
        },
        {
            name: "12x16 Shed",
            img: "./img/fp/sheds-12x16.jpg",
            dt: "fp5"
        },
        {
            name: "12x24 Shed",
            img: "./img/fp/sheds-12x24.jpg",
            dt: "fp6"
        },
        {
            name: "12x20 Shed",
            img: "./img/fp/sheds-12x20.jpg",
            dt: "fp7"
        },
        {
            name: "14x28 Shed",
            img: "./img/fp/sheds-14x28.jpg",
            dt: "fp8"
        }
    ];

    $scope.quesAnss = [{
        q: "DO I NEED A PERMIT FOR MY SHED OR GARAGE?",
        collapseVal: "collapse-6",
        a: "That varies by town and municipality. Check with your local code office to see what the requirements are for your location. They will provide you with an application for a permit if needed and let you know the process you need to take. If you have questions about the size and details of your structure, contact your Woodtex Sales Advisor."
    }, {
        q: "HOW LONG WILL IT TAKE FOR ME TO GET MY SHED?",
        collapseVal: "collapse-7",
        a: "Timeframe varies on location, time of year, our work load and the type of building you are purchasing. At the time of your order and deposit, we will provide an approximate time frame for delivery. Give us a call any time to ask what our current lead times are for your location and structure!"
    }, {
        q: "WHAT IS THE DIFFERENCE BETWEEN BUYING A SHED IN STOCK AND ORDERING A SHED",
        collapseVal: "collapse-8",
        a: "There is no difference in the price of your structure! Depending on the lead time at your Sales Center, there may be a difference in delivery time, but not always. We're happy to deliver your dream shed direct from our sales center or fresh from our shop!"
    }];

});
