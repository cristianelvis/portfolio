$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navHide").addClass("navShow");
    } else {
        $(".navHide").removeClass("navShow");
    }
});
$(document).ready(function(){
    $("#navigation").load("_navigation.html");
    $("#footer").load("_footer.html");
    $("#inicio").load("section001.html");
    $("#start").load("section001.html");
    $("#oquesomos").load("section002-1.html");
    $("#whoarewe").load("section002-1.html");
    $("#quesomos").load("section002-1.html");
    $("#porqueusarnossaplataforma").load("section002-2.html");
    $("#whyuseourplatform").load("section002-2.html");
    $("#freedomeeuser").load("section002-3.html");
    $("#cincomediadores").load("section003.html");
    $("#fivemediators").load("section003.html");
    $("#loscincomediadores").load("section003.html");
    $("#valores").load("section004.html");
    $("#values").load("section004.html");
    $("#idealizadora").load("section005.html");
    $("#founder").load("section005.html");
    $("#idealizador").load("section005.html");
    $("#parceiros").load("section006.html");
    $("#partners").load("section006.html");
    $("#passos").load("section007.html");
    $("#steps").load("section007.html");
    $("#impulsionar").load("section008.html");
    $("#boost").load("section008.html");
    $("#tab001").load("tab001.html");
    $("#tab002").load("tab002.html");
    $("#tab003").load("tab003.html");
    $("#tab004").load("tab004.html");
    $("#tab005").load("tab005.html");
    $("#tab006").load("tab006.html");
    $("#tab007").load("tab007.html");
});