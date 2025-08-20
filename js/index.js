// Seleciona os elementos principais
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

// Função para esconder o cartão selecionado
function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".cartao.selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

// Função para mostrar o cartão
function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

// Avançar
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

// Voltar
btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

