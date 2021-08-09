$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".hideLogo").addClass("showLogo");
        $("#mainNav").addClass("navbar-shrink");
        $("#mainNav").addClass("red");
    } else {
        $(".hideLogo").removeClass("showLogo");
        $("#mainNav").removeClass("navbar-shrink");
        $("#mainNav").removeClass("red");
    }
});
