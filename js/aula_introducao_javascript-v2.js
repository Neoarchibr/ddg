//declara que serão usadas duas variáveis
var dado01;
var dado02;

var imgP1;
var imgP2;

//coloca um valor aleatório nestas variáveis...
//
dado01 = Math.round(6 * Math.random());
dado02 = Math.round(6 * Math.random());

if (dado01 == 0) {
    dado01++;
}
if (dado02 == 0) {
    dado02++;
}

if (dado01 > dado02){
    document.getElementById("paragrafo03").innerHTML = "Jogador 1 ganhou";
}
else if (dado01 < dado02){
    document.getElementById("paragrafo03").innerHTML = "Jogador 2 ganhou";
}
else {
    document.getElementById("paragrafo03").innerHTML = "Empate!!!";
}

var imgElementP1 = document.createElement("img"); //cria um elemento img
imgElementP1.src = "./images/dice" + dado01 + ".png"; // referencia da img + numero do dado + a extensão do arquivo -> vai adicionar ao html imgs específicas
var imgElementP2 = document.createElement("img");
imgElementP2.src = "./images/dice" + dado02 + ".png" ;

document.getElementById("paragrafo01").append("Jogador 1: " + dado01); // mesma coisa q innerHTML = innerHTML + [texto]  (acrescenta no final do html interno)
document.getElementById("paragrafo02").append("Jogador 2: " + dado02);

document.getElementById("paragrafo01").append(imgElementP1); //adiciona um elemento img
document.getElementById("paragrafo02").append(imgElementP2);




    



