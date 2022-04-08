$(document).ready(function(){
    $("#head").load("../dashboard/_include_head.html");
    $("#footer").load("../dashboard/_include_footer.html");
    $("#modal").load("../dashboard/_include_modal.html");
    $("#dashboard").load("section_001.html");
    $("#solicitacoesRecursosHumanos").load("section_001.html");
    $("#solicitacoesRecursosHumanosDesligamento").load("section_001.html");
    $("#solicitacoesRecursosHumanosAdmissao").load("section_001.html");
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navHide").addClass("navShow");
    } else {
        $(".navHide").removeClass("navShow");
    }
});
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
});
function showDiv(select) {
    if (select.value==7) {
        document.getElementById('hiddenMotivoOutros').style.display = "flex";
    } else{
        document.getElementById('hiddenMotivoOutros').style.display = "none";
    }
 }