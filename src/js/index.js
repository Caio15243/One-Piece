/*
O que precisamos fazer ? - Quando clicar no botão do personagem da lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente       
    Objetivo 1: Quando clicar no obotão do personagem na lista, marcar o botão como selecionado.
        Passo 1: Pegar os botões np JS para poder verificar quando o usuário clicar em cima de um deles.
        Passo 2: Adicionar a classe "selecionado"  no botão que o usuário clicou.
        Passo 3: Verificar se ja existe um botão seleci onado. Se sim, devemos remover a seleção dele.
    Objetivo 2: Quando clicar no botão do personagem, mostrar as informações do personagem. 
        Passo 1: Pegar os personagens no JS para poder mostrar ou esconder ele.
        Passo 2: Adicionar a classe "selecionado" no personagem que o usuário selecionou.
        Passo 3: Verificar se ja existe um personagem selecionado. Se sim, devemos remover a seleção dele
*/

//Objetivo 1: Quando clicar no obotão do personagem na lista, marcar o botão como selecionado.
//Passo 1: Pegar os botões np JS para poder verificar quando o usuário clicar em cima de um deles.

const botoes = document.querySelectorAll('.botao');

//Objetivo 2: Quando clicar no botão do personagem, mostrar as informações do personagem.
//Passo 1: Pegar os personagens no JS para poder mostrar ou esconder ele.

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //Passo 3: Verificar se ja existe um botão selecionado. Se sim, devemos remover a seleção dele.

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        //Passo 2: Adicionar a classe "selecionado"  no botão que o usuário clicou.

        botao.classList.add("selecionado")

        //Passo 3: Verificar se ja existe um personagem selecionado. Se sim, devemos remover a seleção dele

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado")

        //Passo 2: Adicionar a classe "selecionado" no personagem que o usuário selecionou.

        personagens[indice].classList.add("selecionado")

    });
});