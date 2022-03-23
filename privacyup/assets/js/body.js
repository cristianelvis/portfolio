$(document).ready(function(){
    const elementos=document.querySelectorAll('[data-anima]');
    const animacaoClass='animacao';

    function animaScroll(){
        const topWindow=window.pageYOffset+((window.innerHeight*3)/4);
        elementos.forEach(function(elemento){
            if(topWindow > elemento.offsetTop){
                elemento.classList.add(animacaoClass);
            }else{
                elemento.classList.remove(animacaoClass);
            }
        });
    }
    if(elementos.length){
        window.addEventListener('scroll',function(){
            animaScroll();
        });
    }
});