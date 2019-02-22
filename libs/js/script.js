// fixed-header
$(window).scroll(function() {
    var scroll_Height = window.pageYOffset;

    if (scroll_Height > 80) {
        jQuery('header').addClass('fixed-header');
    } else {
        jQuery('header').removeClass('fixed-header');
    }
})

// typescript
new TypeIt('#typescript-top', {
	speed: 120,
	breakLines: false,
	loop: true,
	waitUntilVisible: true
})
.type('-аср')
.pause(2000)
.delete()
.type('кунлик таьлим')
.pause(2000)
.delete()
.type('% чегирма')
.pause(2000)
.delete()
.type('00 000 сўм')
.pause(2000)
.delete()
.go();



// feathericons
feather.replace()

// masked-input
$(".masked-input-phone").mask("(99) 999 - 99 - 99");

// owl-carousel
$('.our_team.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.testimonials.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    items:1
})

$('.news.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // autoplay: true,
    items:3
})

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
  } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
}

// Page scrolling

$('.js-btn').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(0).offset().top
    }, 800);
});

$('.js-btn').eq(1).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(1).offset().top
    }, 800);
});

$('.js-btn').eq(2).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(2).offset().top
    }, 800);
});

$('.js-btn').eq(3).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(3).offset().top
    }, 800);
});

$('.js-btn').eq(4).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(4).offset().top
    }, 800);
});

$('.js-btn').eq(5).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(5).offset().top
    }, 800);
});

$('.js-btn').eq(6).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(6).offset().top
    }, 800);
});