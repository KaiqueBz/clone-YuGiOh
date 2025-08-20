const cartas = document.querySelectorAll(".cartao");

cartas.forEach(carta => {
    carta.addEventListener("click", () => {
        // alterna a classe que faz girar no próprio lugar
        carta.classList.toggle("virar");

        // alterna o fundo da carta
        const verso = carta.querySelector(".carta-virada");
        verso.classList.toggle("mostrar-fundo-carta");
    });
});

