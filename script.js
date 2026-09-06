$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var scrollPercentage = scrollTop / $(window).height();
    var scrollPercentage1 = ((scrollPercentage > 1) ? 1 : scrollPercentage);
    var scrollPercentage2 = ((scrollPercentage < 1) ? 0 : (scrollPercentage - 1));
    var scrollPercentage2 = ((scrollPercentage > 2) ? 1 : (scrollPercentage2));
    var scrollPercentage3 = ((scrollPercentage < 2) ? 0 : (scrollPercentage - 2));
    $("#problem").css("left", `calc(30vw - 5vmin - ${scrollPercentage1 * 100}vw)`);
    $("#solution").css("left", `calc(130vw - 5vmin - ${scrollPercentage1 * 100}vw)`);
    $("#solution").css("top", `calc(25vh - 5vmin - ${scrollPercentage2 * 100}vh)`);
    $("#kit").css("top", `calc(125vh - 5vmin - ${scrollPercentage2 * 100}vh)`);
    $("#kit").css("left", `calc(30vw - 5vmin + ${scrollPercentage3 * 100}vw)`);
    $("#link").css("left", `calc(-70vw - 5vmin + ${scrollPercentage3 * 100}vw)`);
    $(".background1").css("opacity", `${1 - scrollPercentage1}`);
    $(".background2").css("opacity", `${1 - scrollPercentage2}`);
});