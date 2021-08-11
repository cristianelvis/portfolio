$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navHide").addClass("navShow");
    } else {
        $(".navHide").removeClass("navShow");
    }
});
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
$(document).ready(function(){
    $("#menu").load("content/menu.html");
    $("#section001").load("content/section001.html");
});