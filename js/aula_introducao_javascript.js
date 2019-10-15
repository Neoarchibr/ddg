 //declara que serão usadas duas variáveis
var dado01;
var dado02;
console.log('rtdfgxdfhfg');
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
}else if (dado01 < dado02){
	document.getElementById("paragrafo03").innerHTML = "Jogador 2 ganhou";
}else {
	document.getElementById("paragrafo03").innerHTML = "Empate!!!";
}

document.getElementById("p1-dice" + dado01).style.display = "inline-block";
document.getElementById("p2-dice" + dado02).style.display = "inline-block";

//prepend -> adiciona (nesse caso) uma string no início do elemeto//
document.getElementById("paragrafo01").prepend("Jogador 1: " + dado01); //mesma coisa q inner HTML = [texto] + innerHTML  (adiciona no início do html interno)
document.getElementById("paragrafo02").prepend("Jogador 2: " + dado02);




	



