"use strict";

$(document).ready(function () {
    // Плавне прокручування через меню навігації
    $('nav a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu__mobile .menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false;
    })
    // Розгортання гамбургер меню
    $('.menu__burger').click(function () {
        $('.menu__mobile .menu').toggle(500);
        $(this).toggleClass('close');

    })
});



