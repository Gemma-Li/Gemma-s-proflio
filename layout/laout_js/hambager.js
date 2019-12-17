
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.nav').toggleClass('active')
    });
});

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.social').toggleClass('active')
    });
});