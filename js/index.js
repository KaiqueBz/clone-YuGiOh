// Seleciona os elementos necessários
const btnAvancar = document.querySelector(".btn-avancar");
const btnVoltar = document.querySelector(".btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0; // começa na primeira carta

// Função para esconder o cartão selecionado
function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

// Função para mostrar o cartão na posição correta
function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

// Evento botão avançar
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return; // já está no último
  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

// Evento botão voltar
btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return; // já está no primeiro
  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

