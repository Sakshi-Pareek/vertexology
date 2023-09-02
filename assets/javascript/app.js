// -----------preloader-----------------
setTimeout(() => {
    const box = document.getElementById("box");

    box.style.display = "none";

    window.scrollTo(0, 0);

    document.body.classList.remove("overflow-hidden");
}, 2000);

// ------------------backtotop---------------------
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// -----------navbar------------

let label = document.querySelector("#label")
let navbox = document.querySelector(".navbox")
label.addEventListener("click", function () {
    navbox.classList.toggle("left-0")
})
function showNav() {
    document.body.classList.toggle('overflow-hidden')
}

// ----------overflow-sloder--------------
$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '.next_btn',
    prevArrow: '.pre_btn',
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1.4
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1.01
        }
    }]
});
// ------------------aos------------------
AOS.init({
    duration: 1200,
    once: true,
}
);
