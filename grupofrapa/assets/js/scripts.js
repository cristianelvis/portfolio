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
    $("#Start").load("section001.html");
    $("#Comienzo").load("section001.html");
    $("#Quemsomos").load("section002.html");
    $("#WhoWeAre").load("section002.html");
    $("#QuienesSomos").load("section002.html");
    $("#Produtos").load("section003.html");
    $("#Products").load("section003.html");
    $("#Productos").load("section003.html");
    $("#Localizacao").load("section004.html");
    $("#Location").load("section004.html");
    $("#Localizacion").load("section004.html");
    $("#FaleConosco").load("section005.html");
    $("#ContactUs").load("section005.html");
    $("#HableConNosotros").load("section005.html");
});
