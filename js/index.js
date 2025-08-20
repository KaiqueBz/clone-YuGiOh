const botoesAvancar = document.getElementById("btn-avancar");
const botoesVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// Função para esconder o cartão selecionado
function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

// Função para mostrar o próximo cartão
function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

// Botão avançar
botoesAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

// Botão voltar
botoesVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

// ----------------- VIRAR CARTA -----------------
cartoes.forEach((cartao) => {
  const verso = cartao.querySelector(".carta-virada");

  cartao.addEventListener("click", () => {
    verso.classList.toggle("mostrar-fundo-carta");
  });
});

