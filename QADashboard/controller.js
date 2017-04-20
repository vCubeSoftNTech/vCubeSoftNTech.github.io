var ProjectManagement = function($scope) {
    //  $scope.cmntdiv = false;

    $scope.projects = [{
            name: "VW Passat CC",
            link: "https://operations.insidemaps.com/app/photo-analyzer/?project=7sdjamQ0db",
            company: "Virtuance",
            type: "2D/3D/VT",
            priority: "Standard",
            time: "101h"
        },
        {
            name: "bobbyr-20170309200006",
            link: "https://operations.insidemaps.com/app/photo-analyzer/?project=EDuSXkqEjF",
            company: "Insidemaps",
            type: "2D/VT",
            priority: "Ignore",
            time: "10h"
        },
        {
            name: "3202 North 16th Street",
            link: "https://operations.insidemaps.com/app/photo-analyzer/?project=Mu4YC3hoX5",
            company: "Matt",
            type: "2D/3D/VT",
            priority: "Urgent",
            time: "247h"
        },
        {
            name: "6 South Cervidae Drive",
            link: "https://operations.insidemaps.com/app/photo-analyzer/?project=c0jCIUo5t5",
            company: "Roofstock",
            type: "2D/3D/VT",
            priority: "Standard",
            time: "30h"
        },
        {
            name: "3720 cress way",
            link: "https://operations.insidemaps.com/app/photo-analyzer/?project=wDjkOAUE34",
            company: "Drake Insidemaps",
            type: "2D/3D/VT",
            priority: "High",
            time: "931h"
        },
        {
            name: "1849 W Newport ave",
            link: "https://www.insidemaps.com/app/photo-analyzer/?project=glU0rB0WSb",
            company: "FPU",
            type: "2D/VT",
            priority: "Low",
            time: "N/A"
        },
        {
            name: "West 7735 South",
            link: "https://www.insidemaps.com/app/photo-analyzer/?project=olC4h8XuuN",
            company: "Roofstock",
            type: "2D/3D/VT",
            priority: "Standard",
            time: "1961h"
        },
        {
            name: "19 creekside dr",
            link: "https://operations.insidemaps.com/app/photo-analyzer/?project=lASGKb1TLH",
            company: "Drake Insidemaps",
            type: "2D/3D/VT",
            priority: "Urgent",
            time: "2291h"
        },
        {
            name: "7031 38th Avenue North",
            link: "https://operations.insidemaps.com/app/photo-analyzer/?project=DinoWKnKHH",
            company: "ABC Inc",
            type: "2D/3D/VT",
            priority: "Standard",
            time: "65h"
        },
        {
            name: "277 acorn tree d",
            link: "https://operations.insidemaps.com/app/photo-analyzer/?project=bLUlNSXVqY",
            company: "DEF Inc",
            type: "2D/3D/VT",
            priority: "High",
            time: "223h"
        }
    ]

    $scope.expand = function(index) {
        console.log(index);
        console.log($scope.projects[index]);
        $scope.projects[index].cmntdiv = true;
    }

    $scope.collapse = function(index) {
        console.log(index);
        console.log($scope.projects[index]);
        $scope.projects[index].cmntdiv = false;
    }

    $scope.todoList = [{todoText:'Comment-1', done:false}];

   $scope.todoAdd = function() {
       $scope.todoList.push({todoText:$scope.todoInput, done:false});
       $scope.todoInput = "";
   };

   $scope.remove = function() {
       var oldList = $scope.todoList;
       $scope.todoList = [];
       angular.forEach(oldList, function(x) {
           if (!x.done) $scope.todoList.push(x);
       });
   };

    $scope.listColorCSS = function() {
        for (var i = 0; i < $scope.projects.length; i++) {
            if ($scope.projects[i].priority == "Standard") {
                $scope.projects[i].bgcolor = "#d9edf7";
                //$scope.projects[i].txtcolor = "#080808";
            } else if ($scope.projects[i].priority == "Urgent") {
                $scope.projects[i].bgcolor = "#ff5d50";
                //$scope.projects[i].txtcolor = "#f5f5f5";
            } else if ($scope.projects[i].priority == "High") {
                $scope.projects[i].bgcolor = "#ffc165";
                //$scope.projects[i].txtcolor = "#080808";
            } else if ($scope.projects[i].priority == "Ignore") {
                $scope.projects[i].bgcolor = "#f1f1f1";
                //  $scope.projects[i].txtcolor = "#080808";
            } else if ($scope.projects[i].priority == "Low") {
                $scope.projects[i].bgcolor = "#ccc";
                //  $scope.projects[i].txtcolor = "#080808";
            } else {
                console.log("Else Block");
            }

        }
    }

};


angular.module('myapp', []).controller('ProjectManagement', ['$scope', ProjectManagement]);
