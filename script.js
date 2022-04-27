var carta1 = {
  nome: "Aang",
  imagem: "https://ogimg.infoglobo.com.br/in/24907109-c86-bcf/FT1086A/avatar-a-lenda-de-aang.jpg",
  atributos: {
    Ataque: 5,
    Defesa: 8,
    Dobra: 10
  }
}
var carta2 = {
  nome: "Zuko",
  imagem: "https://spinoff.com.br/wp-content/uploads/2020/07/Zuke-fire-Avatar-The-Last-Airbender.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 4,
    Dobra: 6
  }
}
var carta3 = {
  nome: "Katara",
  imagem: "https://i.pinimg.com/550x/4a/e9/b9/4ae9b96df3b7b721512ad89113b318fb.jpg",
  atributos: {
    Ataque: 3,
    Defesa: 5,
    Dobra: 10
  }
}

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador)

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado () {
  var radioAtributos = document.getElementsByName("atributo")

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }

  }

}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.getElementById("resultado");

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Você Venceu!</p>";
  } else if (cartaMaquina.atributos > cartaJogador.atributos) {
    htmlResultado = "<p class='resultado-final'>Você perdeu, a carta da máquina é maior!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Você empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>" ;
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}

function exibirCartaMaquina() {
   var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>" ;
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}
