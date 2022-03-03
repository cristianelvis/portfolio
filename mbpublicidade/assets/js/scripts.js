$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navHide").addClass("navShow");
    } else {
        $(".navHide").removeClass("navShow");
    }
});
$(document).ready(function(){
    $("#navigation").load("../inicio/_navigation.html");
    $("#inicio").load("../inicio/section001.1.html");
    $("#CallToAction").load("../inicio/section001.2.html");
    $("#sobrenos").load("../inicio/section002.html");
    $("#servicos").load("../inicio/section003.html");
    $("#faleconosco").load("../inicio/section004.html");
    $("#footer").load("../inicio/_footer.html");
});