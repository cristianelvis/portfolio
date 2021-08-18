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
    $("#oquesomos").load("section002-1.html");
    $("#porqueusarnossaplataforma").load("section002-2.html");
    $("#freedomeeuser").load("section002-3.html");
    $("#cincomediadores").load("section003.html");
    $("#valores").load("section004.html");
    $("#idealizadora").load("section005.html");
});