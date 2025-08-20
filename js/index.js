document.addEventListener("DOMContentLoaded", () => {
  const btnAvancar = document.getElementById("btn-avancar");
  const btnVoltar  = document.getElementById("btn-voltar");
  const cartoes    = Array.from(document.querySelectorAll(".lista-personagens .cartao"));

  if (!btnAvancar || !btnVoltar || cartoes.length === 0) {
    console.error("Setup inválido: confira os IDs dos botões e se existem .cartao dentro de .lista-personagens.");
    return;
  }

  // Tenta achar o que já vem como .selecionado no HTML
  let cartaoAtual = cartoes.findIndex(c => c.classList.contains("selecionado"));
  if (cartaoAtual < 0) {
    cartaoAtual = 0;
    cartoes[0].classList.add("selecionado");
  }

  function selecionar(indiceNovo) {
    cartoes[cartaoAtual].classList.remove("selecionado");
    // loop infinito (vai do último para o primeiro e vice-versa)
    cartaoAtual = (indiceNovo + cartoes.length) % cartoes.length;
    cartoes[cartaoAtual].classList.add("selecionado");
  }

  btnAvancar.addEventListener("click", () => selecionar(cartaoAtual + 1));
  btnVoltar .addEventListener("click", () => selecionar(cartaoAtual - 1));
});
