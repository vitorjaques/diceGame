
function tirarDados(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImage1)


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImage2)

    $("#refresh-button").click(function() {
        location.reload();
          });
    
    return [randomNumber1, randomNumber2];

}



var resultados = tirarDados();

var jugador1 = resultados[0];
var jugador2 = resultados[1];

if (jugador1 > jugador2){
    $("h1").text("Jugador 1 ¡Ha Ganado!");
}
else if(jugador2 > jugador1){
    $("h1").text("Jugador 2 ¡Ha Ganado!");
}
else{
    $("h1").text("¡Habeis Empatado!");
}

document.querySelector

