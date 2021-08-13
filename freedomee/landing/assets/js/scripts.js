$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navHide").addClass("navShow");
    } else {
        $(".navHide").removeClass("navShow");
    }
});
$(document).ready(function(){
    $("#section000").load("section000.html");
    $("#section001").load("section001.html");
    $("#section002").load("section002.html");
    $("#section003").load("section003.html");
    $("#section004").load("section004.html");
    $("#section005").load("section005.html");
    $("#section006").load("section006.html");
});