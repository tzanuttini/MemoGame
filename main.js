var imagenes = ["img/perro.jpg", "img/arbol.jpg", "img/auto.png", "img/flor.png", "img/gato.jpg", "img/hombre.png", "img/mujer.png", "img/pajaro.jpg"];
var intentos = 20;
var img = document.getElementsByClassName("card");
var card1 = "";
var card2 = "";
var puntos = 0;
var def = "img/preg.png";
var span = document.getElementById('intentos');
span.innerText = "Quedan "+intentos+" todavía";


function mostrar(img) {
    if (puntos != 8 && intentos > 0) {
        if (card1 == "") {
            card1 = img;
            img.src = imagenes[img.getAttribute('data-value')];
        } else if (card2 == "") {
            card2 = img;
            img.src = imagenes[img.getAttribute('data-value')];
            if (card1.src != card2.src) {
                intentos--;
                setTimeout(function () {
                    card1.src = def;
                    card2.src = def;
                    card1 = "";
                    card2 = "";
                }, 2000);
                span.innerText = "Quedan "+intentos+" todavía";
            } else {
                puntos++;
                intentos--;
                span.innerText = "Quedan "+intentos+" todavía";
                card1 = "";
                card2 = "";
                if(puntos == 8){
                    alert("ganaste!");
                }
            }
        }
    }else{
        alert("Perdiste! prueba de nuevo");
    }
}
function reset(){
    window.location = window.location;
}