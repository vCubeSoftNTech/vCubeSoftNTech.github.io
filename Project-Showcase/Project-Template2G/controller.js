var app = angular.module('InsideMapsData', ['ui.bootstrap']);
app.controller('MainCtrl', function($scope) {

    $scope.floorToggle = true;

    $scope.floorPlanImageSelected = function(index) {
        console.log(index);
        $scope.selectedIndex = index;
    }
    var slides = [{
            image: './img/1.jpg',
            text: "Bedroom1",
            top: "320px",
            left: "185px"
        },
        {
            image: './img/2.jpg',
            text: "Bedroom2",
            top: "215px",
            left: "180px"
        },
        {
            image: './img/3.jpg',
            text: "Master Bedroom",
            top: "135px",
            left: "195px"
        },
        {
            image: './img/4.jpg',
            text: "Kitchen",
            top: "75px",
            left: "250px"
        },
        {
            image: './img/5.jpg',
            text: "Dining Room",
            top: "130px",
            left: "295px"
        },
        {
            image: './img/6.jpg',
            text: "Living Room",
            top: "325px",
            left: "300px"
        },
        {
            image: './img/7.jpg',
            text: "Office Room",
            top: "470px",
            left: "270px"
        },
        {
            image: './img/8.jpg',
            text: "Entry",
            top: "225px",
            left: "295px"
        },
        {
            image: './img/9.jpg',
            text: "Street Gate",
            top: "",
            left: ""
        },
        {
            image: './img/10.jpg',
            text: "Park Lane",
            top: "",
            left: ""
        },
        {
            image: './img/11.jpg',
            text: "Street Gate",
            top: "",
            left: ""
        },
        {
            image: './img/12.jpg',
            text: "Shoals Granite",
            top: "",
            left: ""
        }
    ];

    jssor_1_slider_init = function() {

          var jssor_1_SlideshowTransitions = [
            {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
          ];

          var jssor_1_options = {
            $AutoPlay: 1,
            // $SlideWidth: 2000, //assign width
            // $SlideHeight: 1500, //assign height
            $SlideshowOptions: {
              $Class: $JssorSlideshowRunner$,
              $Transitions: jssor_1_SlideshowTransitions,
              $TransitionsOrder: 1
            },
            $ArrowNavigatorOptions: {
              $Class: $JssorArrowNavigator$
            },
            $ThumbnailNavigatorOptions: {
              $Class: $JssorThumbnailNavigator$,
              $Cols: 10,
              $SpacingX: 8,
              $SpacingY: 8,
              $Align: 360
            }
          };

          var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

          /*responsive code begin*/
          /*remove responsive code if you don't want the slider scales while window resizing*/
          function ScaleSlider() {
              var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
              if (refSize) {
                  refSize = Math.min(refSize, 800);
                  jssor_1_slider.$ScaleWidth(refSize);
              }
              else {
                  window.setTimeout(ScaleSlider, 30);
              }
          }
          ScaleSlider();
          $Jssor$.$AddEvent(window, "load", ScaleSlider);
          $Jssor$.$AddEvent(window, "resize", ScaleSlider);
          $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
          /*responsive code end*/
      };

    $scope.slides = slides;

    var inHTML = "";
    $.each(slides, function(index, value) {
        var newItem = "<div><img data-u='image' src =" + value.image +" /> <img data-u='thumb' src =" + value.image +" /></div>"
        inHTML += newItem;
    });

    $("#dynamicThumbs").html(inHTML);

    $(document).on('ready', function() {
      jssor_1_slider_init();
    });
});
