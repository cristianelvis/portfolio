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
    $("#inicio").load("section001.html");
    $("#sobrenos").load("section002.html");
    $("#faleconosco").load("section003.html");
    $("#footer").load("_footer.html");
});