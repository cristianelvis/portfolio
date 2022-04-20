$(document).ready(function(){
    $("#head").load("../dashboard/_include_head.html");
    $("#footer").load("../dashboard/_include_footer.html");
    $("#modal").load("../dashboard/_include_modal.html");
    $("#dashboard").load("section_001.html");
    $("#gestaodepessoas").load("section_001.html");
    $("#mrhDesligamento").load("section_001.html");
    $("#mrhAdmissao").load("section_001.html");
    $("#mrhAlteracaoCargaHoraria").load("section_001.html");
    $("#mrhAlteracaoCargoEspecialidade").load("section_001.html");
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