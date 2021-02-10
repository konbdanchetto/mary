// function scrollWin(){
//     window.scrollTo({
//         top: 1000,
//         behavior: 'smooth',
//     })
// }

$(document).ready(function () {

    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 900);
            return false;
        });
    });

    $('.arrow').click(function () {
        $('.s_con').fadeTo(1000, 1, 'linear')
    });

    $('.chakra').click(function () {
        $('.banan').fadeTo(1000, 1, 'linear')
    });

    $('.yak').click(function () {
        $('.t_con').fadeTo(1000, 1, 'linear')
    });

    $('.you').click(function () {
        $('.fo_con').fadeTo(1000, 1, 'linear')
    });

    $('.loveyou').click(function() {
        $('.fi_con').fadeTo(1000, 1, 'linear')
    })

    $('.end').click(function() {
        $('.six_con').fadeTo(1000, 1, 'linear')
    })

});
