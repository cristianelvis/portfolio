$(function(){
    $("#includeNav").load("assets/html/nav.html");
    $("#includeExtra").load("assets/html/extra.html");
    $("#includeModal").load("assets/html/modal.html");
    $("#includeFooter").load("assets/html/footer.html");
    $("#includeIndexContent").load("assets/html/indexContent.html");
    $("#includeAfiliadosContent").load("assets/html/afiliadosContent.html");
    $("#includeUniaoContent").load("assets/html/uniao5mediadoresContent.html");
    $("#includeGruposContent").load("assets/html/gruposContent.html");
    $("#includeGruposEditarContent").load("assets/html/gruposEditarContent.html");
    $("#includeGruposMembrosContent").load("assets/html/gruposMembrosContent.html");
    $("#includeGruposTesteDoCrisContent").load("assets/html/gruposTesteDoCrisContent.html");
    $("#includeGruposTesteDoCrisAddMembrosContent").load("assets/html/gruposTesteDoCrisAddMembrosContent.html");
    $("#includeValoresComunsContent").load("assets/html/valoresComunsContent.html");
    $("#includePaginaVendedorContent").load("assets/html/paginaVendedorContent.html");
    $("#includePaginaVendedorListaProdutosContent").load("assets/html/paginaVendedorListaProdutosContent.html");
    $("#includeUsuarioContent").load("assets/html/usuarioContent.html");
    $("#includeLojaOnlineContent").load("assets/html/lojaOnlineContent.html");
    $("#includeEducacaoCapacitacaoContent").load("assets/html/educacaoCapacitacaoContent.html");
    $("#includeEducacaoCapacitacaoCadastroContent").load("assets/html/educacaoCapacitacaoCadastroContent.html");
    $("#includeProjetosNomedoprojetoContent").load("assets/html/projetosNomedoprojetoContent.html");
});
$('#videoPlay').on('shown.bs.modal', function () {
  $('#video1')[0].play();
})
$('#videoPlay').on('hidden.bs.modal', function () {
  $('#video1')[0].pause();
})
$("#btnfile").click(function () {
    $("#uplodfile").click();
});
$("#uplodfile").change(function () {
    var file=$(this).val().replace(/C:\\fakepath\\/ig,'');    
    $("#fname").text(file);
});