const btnAvancar = document.getElementById("btn-avancar");
const btnvoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function(){
        const cartaVirada = cartao.querySelector(".carta-virada");

        //virar o cartão
        cartao.classList.toggle("virar");
        //mostrar fundo da carta
        cartaVirada.classList.toggle("mostrar-fundo-carta");
        

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });
});


btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length -1)return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++
    cartoes[cartaoAtual].classList.add("selecionado");
});

btnvoltar.addEventListener("click", function(){
    if(cartaoAtual === 0)return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});

