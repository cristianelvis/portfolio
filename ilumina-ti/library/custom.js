// Movimenta os objetos no banner
var object01=$('#object01');
var object02=$('#object02');
var object03=$('#object03');

var layer1=$('#layer1');
layer1.mousemove(function(e){
	var valueX=(e.pageX * -1 / 15); 
	var valueY=(e.pageY * -1 / 15); 
    object01.css({
        'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});
layer1.mousemove(function(e){
	var valueX=(e.pageX * -1 / 20); 
	var valueY=(e.pageY * -1 / 20); 
    object02.css({
        'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});
layer1.mousemove(function(e){
	var valueX=(e.pageX * -1 / 15); 
	var valueY=(e.pageY * -1 / 15); 
    object03.css({
        'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});

// mostra o logo somente quando rolar a página
window.onscroll = function() {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if(top <= 80) {
       jQuery(".showlogo").css('display', 'none');
    }
    else {
       jQuery(".showlogo").css('display', 'unset');
    }
}