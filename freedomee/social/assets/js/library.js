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
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
});