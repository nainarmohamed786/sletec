$('.slider').slick({
    slidesToShow: 1,
    dots:true,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1000,
speed:1500,
pauseOnHover:false,
prevArrow: false,
nextArrow: false
});

$('.multiple-item').slick({
    slidesToShow: 4,
    dots:false,
    infinite: true,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1000,
speed:800,
pauseOnHover:true,
prevArrow: false,
nextArrow: false,
});