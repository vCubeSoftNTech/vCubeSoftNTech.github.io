var app = angular.module('InsideMapsData', ['ui.bootstrap']);
app.controller('MainCtrl', function($scope) {

    $scope.floorToggle = true;

    $scope.floorPlanImageSelected = function(index) {
        console.log(index);
        $scope.selectedIndex = index;
        changeTheSlide(index);
    }
    var slides = [{
            image: './img/1.jpg',
            text: "Bedroom1",
            top: "",
            left: "",
            index_number: 0
        },
        {
            image: './img/2.jpg',
            text: "Bedroom2",
            top: "36%",
            left: "38%",
            index_number: 1
        },
        {
            image: './img/3.jpg',
            text: "Master Bedroom",
            top: "22%",
            left: "40%",
            index_number: 2
        },
        {
            image: './img/4.jpg',
            text: "Kitchen",
            top: "13%",
            left: "53%",
            index_number: 3
        },
        {
            image: './img/5.jpg',
            text: "Dining Room",
            top: "25%",
            left: "60%",
            index_number: 4
        },
        {
            image: './img/6.jpg',
            text: "Living Room",
            top: "53%",
            left: "38%",
            index_number: 5
        },
        {
            image: './img/7.jpg',
            text: "Office Room",
            top: "80%",
            left: "56%",
            index_number: 6
        },
        {
            image: './img/8.jpg',
            text: "Entry",
            top: "54%",
            left: "62%",
            index_number: 7
        },
        {
            image: './img/9.jpg',
            text: "Street Gate",
            top: "",
            left: "",
            index_number: 8
        },
        {
            image: './img/10.jpg',
            text: "Park Lane",
            top: "",
            left: "",
            index_number: 9
        },
        {
            image: './img/11.jpg',
            text: "Street Gate",
            top: "",
            left: "",
            index_number: 10
        },
        {
            image: './img/12.jpg',
            text: "Shoals Granite",
            top: "",
            left: "",
            index_number: 11
        }
    ];

    $scope.slides = slides;

    var inHTML = "";
    $.each(slides, function(index, value) {
        var newItem = "<div><img class=" + value.index_number + " src =" + value.image + "></div>"
        inHTML += newItem;
    });

    var bgImgHTML = "";
    $.each(slides, function(index, value) {
        var bgNewItem = "<div><img class=" + value.index_number + " src =" + value.image + "></div>"

        bgImgHTML += bgNewItem;
    });
    $("#dynamicBG").html(inHTML);

    $("#dynamicThumbs").html(inHTML);

    $(document).on('ready', function() {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true
        });

    });
    var changeTheSlide = function(index) {
        var clickedImageIndex = $("#dynamicThumbs ." + index).first().parent().attr('data-slick-index');
        console.log(clickedImageIndex);
        $('.slider-nav').slick('slickGoTo', clickedImageIndex);
    }
});
