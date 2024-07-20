const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
        botao.classList.add("selecionado");

        personagens[indice].classList.add("selecionado");

        // Adiciona a classe de rotação
        botao.classList.add("rotate");

        // Remove a classe de rotação após a animação terminar
        botao.addEventListener('animationend', () => {
            botao.classList.remove("rotate");
        });

    });

    
});
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}



