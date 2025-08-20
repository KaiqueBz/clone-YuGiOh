document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector(".lista-personagens");
  const cartoes = Array.from(lista.querySelectorAll(".cartao"));
  const btnAvancar = document.getElementById("btn-avancar");
  const btnVoltar = document.getElementById("btn-voltar");

  // Descobre qual começa selecionado; se não tiver, seleciona o primeiro
  let indiceAtual = cartoes.findIndex(c => c.classList.contains("selecionado"));
  if (indiceAtual === -1 && cartoes.length) {
    indiceAtual = 0;
    cartoes[0].classList.add("selecionado");
  }

  function limparEstado(cartao) {
    cartao.classList.remove("virar");
    const verso = cartao.querySelector(".carta-virada");
    verso && verso.classList.remove("mostrar-fundo-carta");

    // Garante que o conteúdo frontal reapareça
    [".nome", ".nivel-carta", ".imagem-carta", ".informacoes"].forEach(sel => {
      const el = cartao.querySelector(sel);
      el && el.classList.remove("esconder");
    });
  }

  function mostrar(indice) {
    const atual = cartoes[indiceAtual];
    if (atual) {
      atual.classList.remove("selecionado");
      limparEstado(atual);
    }

    indiceAtual = (indice + cartoes.length) % cartoes.length;
    const proximo = cartoes[indiceAtual];
    proximo.classList.add("selecionado");
    limparEstado(proximo);
  }

  // Navegação
  btnAvancar && btnAvancar.addEventListener("click", () => {
    mostrar(indiceAtual + 1);
  });

  btnVoltar && btnVoltar.addEventListener("click", () => {
    mostrar(indiceAtual - 1);
  });

  // Clique pra virar / desvirar
  cartoes.forEach(cartao => {
    cartao.addEventListener("click", () => {
      const verso = cartao.querySelector(".carta-virada");

      if (cartao.classList.contains("virar")) {
        // Volta ao normal (em pé, frente)
        cartao.classList.remove("virar");
        verso && verso.classList.remove("mostrar-fundo-carta");
        [".nome", ".nivel-carta", ".imagem-carta", ".informacoes"].forEach(sel => {
          const el = cartao.querySelector(sel);
          el && el.classList.remove("esconder");
        });
      } else {
        // Modo defesa (deitada) + mostra o verso
        cartao.classList.add("virar"); // <- bate com seu CSS (.cartao.virar { transform: rotatez(90deg) })
        verso && verso.classList.add("mostrar-fundo-carta");
        [".nome", ".nivel-carta", ".imagem-carta", ".informacoes"].forEach(sel => {
          const el = cartao.querySelector(sel);
          el && el.classList.add("esconder");
        });
      }
    });
  });
});

