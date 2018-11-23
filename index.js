import './styles.scss';
$(document).ready(main);

/*var contador = 1;

function main(){
    $('.menu').click(function(){
        if (contador ==1){
            $('.drop').animate({
                rigth:'0'    
            });
            contador = 0;
        } else {
            contador = 1;
            $('.drop').animate({
                rigth: -100%;
            });
        }
    })
}*/

Array.prototype.forEach = function(b, c) {//reemplazo metodo forEach para mejor compatibilidad
    var a = 0;
    for (ii = this.length; a < ii; a++) a in this && b.call(c, this[a], a, this)
};
Array.prototype.slice.call(document.querySelectorAll(".menu")).forEach(function(b) {//seleccionamos todos los elementos con class "menu"
    var c = b.querySelector(".menu > .drop"),//variable para el botón
        a = b.querySelector(".menu > nav");//variable para el menú
    c.onclick = function(b) {//toggleClass
        a.className && /(^|\s)open(\s|$)/.test(a.className) ? (a.classList.remove("open"), c.classList.remove("open"), b.preventDefault()) : (a.classList.add("open"), c.classList.add("open"), b.preventDefault())
    }
});