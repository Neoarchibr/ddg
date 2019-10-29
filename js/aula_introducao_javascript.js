 //declara que serão usadas duas variáveis
var dado01;
var dado02;

var farol;
console.log('rtdfgxdfhfg');
//coloca um valor aleatório nestas variáveis...
//
dado01 = Math.floor(10 * Math.random()) + 1;
dado02 = Math.floor(10 * Math.random()) + 1;

farol = 0;

function rolardados ()
{
	if(farol ==0 ){
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
		farol = 1;
	} else{
		window.location.reload()
	}

}

document.getElementById("rolar").addEventListener("click", rolardados);







	



