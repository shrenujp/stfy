// Owl carousel slider
var owl = $('.slide-wrapper .owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    nav: true,
    items: 1,
    margin: 50,
    responsiveClass: true,
    mouseDrag: true,
    responsive : {
        0 : {
            stagePadding: 25,
        },
        1199 : {
            stagePadding: 250,
            margin: 60
        },
        1200 : {
            stagePadding: 400,
            margin: 60
        },
        1281 : {
            stagePadding: 440,
            margin: 60
        },
        1367 : {
            stagePadding: 250,
        },
        1401 : {
            stagePadding: 400,
        },
        1441: {
            stagePadding: 540
        },
        1601: {
            stagePadding: 500,
        },
        1681: {
            stagePadding: 590,
        }
    }
});

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl', [1000]);
    } else {
        owl.trigger('prev.owl', [1000]);
    }
    e.preventDefault();
});
// Block Animation
$(window).on('load', function () {
    AOS.refresh();
});
AOS.init({
    duration: 1200,
    once: true
})
// Video
var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 
// Modal
$(document).ready(function(){
    $("#modalwrap").modal('show');
});