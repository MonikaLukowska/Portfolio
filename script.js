$(".header-top-burger").on("click", function () {
    $(".fas, aside").toggleClass("show");
})
$(".header-top-nav-mobile a").on("click", function () {
    $(".fas, aside").toggleClass("show");
});

$('.img1').on('click', function () {
    console.log('dziala');
    $('.modal-img1').addClass('active')
})
$('.img2').on('click', function () {
    console.log('dziala');
    $('.modal-img2').addClass('active')
})
$('.img3').on('click', function () {
    console.log('dziala');
    $('.modal-img3').addClass('active')
})
$('.hide').on('click', function () {
    console.log('dziala');
    $('.modal-img').removeClass('active');
})