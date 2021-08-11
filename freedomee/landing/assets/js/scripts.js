$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navHide").addClass("navShow");
    } else {
        $(".navHide").removeClass("navShow");
    }
});
$('.nav-link').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
});
$(document).ready(function(){
    $("#menu").load("content/menu.html");
    $("#section001").load("content/section001.html");
});