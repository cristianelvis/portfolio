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
    $("#inicio").load("../inicio/section001.html");
    $("#quiz").load("../inicio/section002.html");
    $("#sobrenos").load("../inicio/section003.html");
    $("#servicos").load("../inicio/section004.html");
    $("#lgpd").load("../inicio/section005.html");
    $("#publicacoes").load("../inicio/section006.html");
    $("#contato").load("../inicio/section007.html");
    $("#mensagemEnviada").load("../inicio/section008.html");
    $("#quizEnviada").load("../inicio/section009.html");
    $("#footer").load("../inicio/_footer.html");
    $("#modalBR").load("../inicio/_modal.html");
});