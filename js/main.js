$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 80;
    $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - fixed_offset
    }, 1000);
    e.preventDefault();
});

$(function () {
    $('.slider').slick({
        dots: true,
    });
})

if (window.innerWidth <= 768) {
    $('.header__burger, .header__link').click(function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
}

$('.portfolio__more-btn').click(function () {
    $('.all').removeClass('invisible')
    $('.portfolio').toggleClass('more')
});

$('.btn1').on('click', function () {
    $('.branding, .design, .photography, .illustration').addClass('active');
    $('.all').removeClass('active');
});

$('.btn2').on('click', function () {
    $('.all, .design, .photography, .illustration').addClass('active');
    $('.branding').removeClass('active');
});

$('.btn3').on('click', function () {
    $('.branding, .all, .photography, .illustration').addClass('active');
    $('.design').removeClass('active');
});

$('.btn4').on('click', function () {
    $('.branding, .all, .design, .illustration').addClass('active');
    $('.photography').removeClass('active');
});

$('.btn5').on('click', function () {
    $('.branding, .all, .design, .photography').addClass('active');
    $('.illustration').removeClass('active');
});