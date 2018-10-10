
/* ------------  Carousel ------------  */

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    $('select').formSelect();
  });

$('.owl-carousel').owlCarousel(
    {
        loop:false,
        nav:false,
        autoplay:false,
        autoplayTimeout:500000000000,
        autoplayHoverPause:true,
        responsive:
        {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    /* ------------  Portfolio ------------  */


    $(document).ready(function()
    {
        var all = $('.creative, .corporate, .portfolio');
        var creative = $('.creative');
        var corporate = $('.corporate');
        var portfolio = $('.portfolio');

        $('.btn-all').click(function()
        {
        all.addClass('opacity100');
        });
    });