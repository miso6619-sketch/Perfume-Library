$(document).ready(function () {
    $('.btn-mobile').on('click', function () {
        $('.gnb').stop().fadeIn(250);
    });

    $('.btn-close, .gnb a').on('click', function () {
        $('.gnb').stop().fadeOut(220);
    });
});