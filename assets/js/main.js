$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: true,
        navText: [
            '<i style="font-size: 30px" class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i style="font-size: 30px" class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
    });
});