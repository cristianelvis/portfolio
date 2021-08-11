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
$(document).ready(function(){
    $('#menu a').click(function( e ){
        e.preventDefault();
        var el = $( this.getAttribute('href') );
        var offs = el.offset();
        $('html, body').stop().animate({ scrollTop: offs.top-100 },500);    
    });   
});