$(document).ready(function () {
    $('#card-economic').mouseenter(function(){
        $('#content-economic').addClass('open').removeClass('closed');
    });
    $('#card-economic').mouseleave(function(){
        $('#content-economic').addClass('closed').removeClass('open');
    });
    $('#card-human').mouseenter(function(){
        $('#content-human').addClass('open').removeClass('closed');
    });
    $('#card-human').mouseleave(function(){
        $('#content-human').addClass('closed').removeClass('open');
    });
    $('#card-anthropic').mouseenter(function(){
        $('#content-anthropic').addClass('open').removeClass('closed');
    });
    $('#card-anthropic').mouseleave(function(){
        $('#content-anthropic').addClass('closed').removeClass('open');
    });
    $('#card-technology').mouseenter(function(){
        $('#content-technology').addClass('open').removeClass('closed');
    });
    $('#card-technology').mouseleave(function(){
        $('#content-technology').addClass('closed').removeClass('open');
    });
    $('#card-quality').mouseenter(function(){
        $('#content-quality').addClass('open').removeClass('closed');
    });
    $('#card-quality').mouseleave(function(){
        $('#content-quality').addClass('closed').removeClass('open');
    });
    $(function () {
        $('[data-bs-toggle="popover"]').popover({ trigger: "hover" })
    })
})
