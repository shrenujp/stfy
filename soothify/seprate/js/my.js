function owlInitialize() {
    console.log($(window).width());
    if ($(window).width() > 768) {

        var owl = $('.owl-carousel');

        owl.owlCarousel({
            center: true,
            loop: false,
            nav: true,
            items: 1,
            margin: 50,
            mouseDrag: true,  
            responsiveClass: true,  
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
            },
            onDragged : function (ele) {
                isLast = parseInt(ele.item.index) + parseInt(1) == ele.item.count;
                if(isLast){ 
                    $('body').removeClass('noScroll');
                }
            }
        });

        owl.on('mousewheel', '.owl-stage', function(e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });

        $('body').removeClass('mbl-scroll');
        $('.lastitem').show();
    } else {
        $('.owl-carousel').owlCarousel('destroy');
        $(".slide-wrapper").addClass("mbl-carousel");
        $('body').addClass('mbl-scroll');
        $('.lastitem').hide();
    }
}


$(document).ready(function(e) {
    owlInitialize();
});

$(window).resize(function() {
    owlInitialize();
});
