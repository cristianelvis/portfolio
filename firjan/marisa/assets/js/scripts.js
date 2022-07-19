$(document).ready(function(){
    $("#head").load("../dashboard/_include_head.html");
    $("#footer").load("../dashboard/_include_footer.html");
    $("#modal").load("../dashboard/_include_modal.html");
    $("#dashboard").load("section_001.html");
    $("#gestaoDePessoasNovasSolicitacoes").load("section_001.html");
    $("#gestaoDePessoasConsultarSolicitacoes").load("section_001.html");
    $("#tarefasAConcluir").load("section_001.html");    
    $("#mrhDesligamento").load("section_001.html");
    $("#mrhAdmissao").load("section_001.html");
    $("#mrhAdmissaoSubstituicao").load("section_001.html");
    $("#mrhAlteracaoCargaHoraria").load("section_001.html");
    $("#mrhAlteracaoCargoEspecialidade").load("section_001.html");
    $("#mrhAlteracaoItemContabilCentroCusto").load("section_001.html");
    $("#mrhMovimentacaoHorizontal").load("section_001.html");
    $("#mrhMovimentacaoVertical").load("section_001.html");
    $("#mrhTransferencia").load("section_001.html");
    $("#mrhQuebraDeCaixa").load("section_001.html");
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
};
function showDiv2(select) {
    if (select.value==4) {
        document.getElementById('hiddenResponsabilidade').style.display = "flex";
    } else{
        document.getElementById('hiddenResponsabilidade').style.display = "none";
    }
};
function showDiv3(select) {
    if (select.value==1) {
        document.getElementById('lineItemContabil').style.display = "flex";
    } else{
        document.getElementById('lineItemContabil').style.display = "none";
    };
    if (select.value==2) {
        document.getElementById('lineCentroCusto').style.display = "flex";
    } else{
        document.getElementById('lineCentroCusto').style.display = "none";
    };
    if (select.value==3) {
        document.getElementById('lineAmbos').style.display = "flex";
    } else{
        document.getElementById('lineAmbos').style.display = "none";
    }
}