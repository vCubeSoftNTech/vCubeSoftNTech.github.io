var app = angular.module('InsideMapsWoodtex', ['ui.bootstrap']);
app.controller('MainCtrl', function($scope) {

    $scope.clientDetail = {
        logo: "./img/odlogo.png",
        propertyImg: "./img/od1.jpg",
        agencyName: "Opendoor",
        houseNo: "1731 Hidden Brook",
        area: "Grand Prairie, 75050"
    };

    $scope.homeDetails = [{
      key:"Carpet Total",
      val:"27"
    },{
      key:"Tile Total",
      val:"547"
    },{
      key:"Bedrooms",
      val:"5"
    },{
      key:"Bathrooms",
      val:"3"
    },{
      key:"Pool",
      val:"0"
    },{
      key:"Garage",
      val:"1"
    },{
      key:"Plumbing Fixtures",
      val:"7"
    },{
      key:"Bathtubs",
      val:"2"
    },{
      key:"Firepalce",
      val:"0"
    },{
      key:"Entrance Door",
      val:"3"
    },{
      key:"Inner Door",
      val:"21"
    },{
      key:"Windows",
      val:"20"
    }];
    $scope.reportDetails = [{
      key:"Report Generated:",
      val:"JUL 27 2017"
    },{
      key:"Property Scanned:",
      val:"JUL 27 2017"
    },{
      key:"Property Scanner:",
      val:"32°45'56"+'"'+"N "+"97°2'34"+'"'+"W"
    },{
      key:"Geo Location",
      val:"3"
    },{
      key:"[link]",
      val:"https://www.insidemaps.com"
    },{
      key:"Internal ID",
      val:"g9BtNgSOVn"
    },{
      key:"Start of scan",
      val:"Jul 12 2017 16:48:55"
    },{
      key:"Number of Spins",
      val:"29"
    }];
    $scope.roomMeasurements = [{
      roomType: "Bathroom",
      floorArea: 50,
      floorMaterial: "Tile",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "9"
    },{
      roomType: "Bedroom",
      floorArea: 200,
      floorMaterial: "Carpet",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "9"
    },{
      roomType: "Bedroom",
      floorArea: 100,
      floorMaterial: "Carpet",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "9"
    },{
      roomType: "Bedroom",
      floorArea: 50,
      floorMaterial: "Carpet",
      volume: 50,
      wallArea: 50,
      cellingType: "Vaulted",
      avgHeight: "9.2"
    },{
      roomType: "Closet",
      floorArea: 200,
      floorMaterial: "Carpet",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "9"
    },{
      roomType: "Closet",
      floorArea: 200,
      floorMaterial: "Carpet",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "9"
    },{
      roomType: "Hallway",
      floorArea: 200,
      floorMaterial: "Carpet",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "9"
    },{
      roomType: "Laundry",
      floorArea: 200,
      floorMaterial: "Carpet",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "9"
    },{
      roomType: "Living Room",
      floorArea: 50,
      floorMaterial: "Tile",
      volume: 50,
      wallArea: 50,
      cellingType: "Vaulted",
      avgHeight: "8.6"
    },{
      roomType: "Living Room",
      floorArea: 50,
      floorMaterial: "Tile",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "9"
    },{
      roomType: "Foyer",
      floorArea: 50,
      floorMaterial: "Carpet",
      volume: 50,
      wallArea: 50,
      cellingType: "Flat",
      avgHeight: "8"
    }];

    $scope.exteriorMeasurements = [{
      exteriorType: "Garage",
      exteriorFloorArea: 353,
      exteriorFloorMaterial:"Concrete",
      exteriorFloorVolume: 2778,
      exteriorWallArea: 451,
      exteriorCellingType:  "Flat"
    },{
      exteriorType: "Yard",
      exteriorFloorArea: 86,
      exteriorFloorMaterial:"",
      exteriorFloorVolume: 722,
      exteriorWallArea: 72,
      exteriorCellingType:  "Vaulted"
    },{
      exteriorType: "Yard",
      exteriorFloorArea: 163,
      exteriorFloorMaterial:"",
      exteriorFloorVolume: 1281,
      exteriorWallArea: 122,
      exteriorCellingType:  "Flat"
    },{
      exteriorType: "Yard 3",
      exteriorFloorArea: 206,
      exteriorFloorMaterial:"",
      exteriorFloorVolume: 1619,
      exteriorWallArea: 147,
      exteriorCellingType:  "Flat"
    }];

    $scope.appliances = [{
            name: "Dryer",
            img: "./img/appliances/dryer.png",
            dt: "aplnc1",
            location: "Kitchen",
            size: "25⨯25⨯25",
            color: "White"
        },
        {
            name: "Microwave",
            img: "./img/appliances/microwave.jpg",
            dt: "aplnc2",
            location: "Kitchen",
            size: "25⨯25⨯25",
            color: "White"
        },
        {
            name: "Refrigerator",
            img: "./img/appliances/refrigerator.png",
            dt: "aplnc3",
            location: "Dining",
            size: "45⨯45⨯45",
            color: "Grey"
        },
        {
            name: "Water-Heater",
            img: "./img/appliances/waterheater.png",
            dt: "aplnc4",
            location: "Dining",
            size: "20⨯20⨯20",
            color: "White"
        },
        {
            name: "Washing Machine",
            img: "./img/appliances/wm.png",
            dt: "aplnc5",
            location: "Bathroom",
            size: "35⨯35⨯35",
            color: "White"
        }
    ];


    Array.prototype.sum = function (prop) {
           var total = 0
           for ( var i = 0, _len = this.length; i < _len; i++ ) {
               total += this[i][prop]
           }
           return total
       }
       $scope.totalFloorArea = ($scope.roomMeasurements.sum("floorArea"));
       $scope.totalVolume = ($scope.roomMeasurements.sum("volume"));
       $scope.totalWallArea = ($scope.roomMeasurements.sum("wallArea"));

       $scope.exteriorTotalFloorArea = ($scope.exteriorMeasurements.sum("exteriorFloorArea"));
       $scope.exteriorTotalVolume = ($scope.exteriorMeasurements.sum("exteriorFloorVolume"));
       $scope.exteriorTotalWallArea = ($scope.exteriorMeasurements.sum("exteriorWallArea"));

});
