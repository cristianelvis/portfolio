$(document).ready(function(){
    $("#menu").load("content/menu.html");
    $("#section001").load("content/section001.html");
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navHide").addClass("navShow");
    } else {
        $(".navHide").removeClass("navShow");
    }
});