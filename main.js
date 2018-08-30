var imagenes = ["img/perro.jpg","img/arbol.jpg","img/auto.png","img/flor.png","img/gato.jpg","img/hombre.png","img/mujer.png","img/pajaro.jpg"];
var intentos=20;
var img = document.getElementsByClassName("card");
var maximo=2;
var card1="";
var card2 = "";

function mostrar(img){
    if(card1 == "" ){
        card1=img;
        img.src = imagenes[img.getAttribute('data-value')];
    }else if (card2 == ""){
        card2 = img;
        img.src = imagenes[img.getAttribute('data-value')];
    }
}