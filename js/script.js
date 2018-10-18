
/* ------------  Carousel ------------  */

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    $('select').formSelect();
  });

$('.owl-carousel').owlCarousel(
    {
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:700,
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



    /* ----------- Smooth scrolling ------------- */

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
    
    
            var scroll = target.offset().top;
            
            $('html, body').stop().animate({
                scrollTop: scroll
            }, 2000);
        }
    });