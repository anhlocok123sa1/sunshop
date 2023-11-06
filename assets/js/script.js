var counter = 1;

setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    navText:[$('.owl-prev'),$('.owl-next')],
    pagination : true,
    paginationNumbers: true,
    mouseDrag:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        }
    }
});