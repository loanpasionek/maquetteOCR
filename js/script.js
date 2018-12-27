
/* ------------  Carousel ------------  */

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    $('select').formSelect();
  });

$('.owl-carousel').owlCarousel(
    {
        loop:true,
        nav:false,
        autoplay:false,
        autoplayTimeout:50000000000,
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
    var accueil = $('#accueil');
    var accueilHeight = accueil.height();

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
    
    
            var scroll = target.offset().top - accueilHeight;
            
            $('html, body').stop().animate({
                scrollTop: scroll
            }, 2000);
        }
    });


    /* ----------- Changement nav sur scroll -----------  */


     $(function()
    {
        var accueil = $('#accueil');
        var accueilHeight = accueil.height();
        var windowHeight = $(window).height();

        $(window).scroll(function()
        {
            var scroll = $(window).scrollTop();

            if (scroll > windowHeight - accueilHeight)
            {
                accueil.addClass('opacity90 bgcolor2');
            }

            if(scroll <= windowHeight - accueilHeight)
            {
                accueil.removeClass('opacity90 bgcolor2');            
            }
        })
    }); 