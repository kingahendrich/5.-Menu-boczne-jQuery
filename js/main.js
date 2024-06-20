$(document).ready(function() {
    $('.hamburger').click(function(){
        $('.main-menu').toggleClass('open'); //jesli klasa jest to usunie jesli nie ma to doda
    });

    $('.main-menu-item a').click(function(e) {
        e.preventDefault();

        $('body').fadeOut(2000, function() {
            window.location.href=$(e.target).attr('href');
        });
    });

})