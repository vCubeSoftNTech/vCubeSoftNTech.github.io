var HomeAppliance = function($scope) {
    //  $scope.cmntdiv = false;

    $scope.demoDatas = [{
            name: "HE-Man Plumbing",
            rating: "★ ★ ★ ✩ ✩",
            category: "Plumbing, HVAC",
            reviewedBy: "82",
            link: "",
            logoImgLink: "https://goldcoastplumbingcompany.com.au/wp-content/uploads/2017/03/logo_small.png",
            contactAddress: "716 San Antonio Rd Alto, CA 94303",
            contactPerson: "Michael Riley",
            contactNo: "650-323-4138",
            email: "nicole@paloaltoplumbing.com",
            insidemapsRating: "4",
            yelpRating: "3.7",
            pinRating: "4.2",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

        },
        {
            name: "Hansen A G Plumbing",
            rating: "★ ★ ✩ ✩ ✩",
            category: "Plumbing",
            reviewedBy: "11",
            link: "https://goldcoastplumbingcompany.com.au/",
            logoImgLink: "http://brandongaille.com/wp-content/uploads/2014/04/Butterfield-Plumbing-Company-Logo.png",
            contactAddress: "Palo Alto, CA 94301",
            contactPerson: "Authur Hansen",
            contactNo: "650-323-4138",
            email: "aurthur@hansen.com",
            insidemapsRating: "4",
            yelpRating: "3.7",
            pinRating: "4.2",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

        }, {
            name: "HE-Man Plumbing",
            rating: "★ ★ ★ ✩ ✩",
            category: "Plumbing, HVAC",
            reviewedBy: "11",
            link: "",
            logoImgLink: "https://goldcoastplumbingcompany.com.au/wp-content/uploads/2017/03/logo_small.png",
            contactAddress: "716 San Antonio Rd Alto, CA 94303",
            contactPerson: "Michael Riley",
            contactNo: "650-323-4138",
            email: "paloaltoplumbing.com",
            insidemapsRating: "4",
            yelpRating: "3.7",
            pinRating: "4.2",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

        }, {
            name: "Hansen A G Plumbing",
            rating: "★ ★ ✩ ✩ ✩",
            category: "Plumbing",
            reviewedBy: "11",
            link: "https://google.com",
            logoImgLink: "http://brandongaille.com/wp-content/uploads/2014/04/Butterfield-Plumbing-Company-Logo.png",
            contactAddress: "Palo Alto, CA 94301",
            contactPerson: "Authur Hansen",
            contactNo: "650-323-4138",
            email: "aurthur@hansen.com",
            insidemapsRating: "4",
            yelpRating: "3.7",
            pinRating: "4.2",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

        }, {
            name: "HE-Man Plumbing",
            rating: "★ ★ ★ ✩ ✩",
            category: "Plumbing, HVAC",
            reviewedBy: "11",
            link: "https://twitter.com",
            logoImgLink: "https://goldcoastplumbingcompany.com.au/wp-content/uploads/2017/03/logo_small.png",
            contactAddress: "716 San Antonio Rd Alto, CA 94303",
            contactPerson: "Michael Riley",
            contactNo: "650-323-4138",
            insidemapsRating: "4",
            yelpRating: "3.7",
            pinRating: "4.2",
            email: "paloaltoplumbing.com",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

        }, {
            name: "Hansen A G Plumbing",
            rating: "★ ★ ✩ ✩ ✩",
            category: "Plumbing",
            reviewedBy: "11",
            link: "https://google.com",
            logoImgLink: "http://brandongaille.com/wp-content/uploads/2014/04/Butterfield-Plumbing-Company-Logo.png",
            contactAddress: "Palo Alto, CA 94301",
            contactPerson: "Authur Hansen",
            contactNo: "650-323-4138",
            email: "aurthur@hansen.com",
            insidemapsRating: "4",
            yelpRating: "3.7",
            pinRating: "4.2",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

        }
    ]

    $(document).ready(function() {
        $('ul.tabs').tabs();
    });

};


angular.module('myapp', []).controller('HomeAppliance', ['$scope', HomeAppliance]);
