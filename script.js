const perguntas = [

    {
        imagem: "imagens/imagem1.jpg.jpg",
        resposta: "real",
        explicacao: "Esta é uma fotografia real. Observe principalmente a iluminação, as texturas e a interação entre os elementos da cena."
    },

    {
        imagem: "imagens/imagem2.jpg.png",
        resposta: "ia",
        explicacao: "Esta imagem foi gerada por inteligência artificial. Alguns detalhes aparentemente naturais podem esconder pequenas inconsistências."
    },

    {
        imagem: "imagens/imagem3.jpg.jpg",
        resposta: "real",
        explicacao: "Esta imagem é uma fotografia real. A cena foi registrada por uma câmera e não criada por um modelo generativo."
    },

    {
        imagem: "imagens/imagem4.jpg.png",
        resposta: "ia",
        explicacao: "Esta imagem foi criada por IA. Observe cuidadosamente detalhes de anatomia, objetos e iluminação para encontrar pistas."
    },

    {
        imagem: "imagens/imagem5.jpg.avif",
        resposta: "real",
        explicacao: "Esta é uma imagem real. Nem toda fotografia extremamente produzida ou editada foi criada por inteligência artificial."
    },

    {
        imagem: "imagens/imagem6.jpg.png",
        resposta: "ia",
        explicacao: "Esta imagem foi gerada por inteligência artificial. A aparência fotográfica não significa necessariamente que a cena tenha acontecido."
    },

    {
        imagem: "imagens/imagem7.jpg.jpg",
        resposta: "real",
        explicacao: "Esta fotografia é real. Observe a consistência dos elementos da cena e a maneira como a luz interage com eles."
    },

    {
        imagem: "imagens/imagem8.jpg.png",
        resposta: "ia",
        explicacao: "Esta imagem foi gerada por IA. Sistemas atuais conseguem produzir fotografias muito convincentes, tornando a identificação cada vez mais difícil."
    },

    {
        imagem: "imagens/imagem9.jpg.jpg",
        resposta: "real",
        explicacao: "Esta imagem é uma fotografia real. O objetivo do quiz é justamente mostrar que aparência artificial e fotografia real podem ser difíceis de diferenciar."
    },

    {
        imagem: "imagens/imagem10.jpg.jpg",
        resposta: "ia",
        explicacao: "Esta imagem foi criada por inteligência artificial. Pequenos detalhes podem funcionar como pistas, mas nenhuma pista visual isolada é garantia absoluta."
    }

];


let questaoAtual = 0;
let pontos = 0;
let respondeu = false;


function iniciarQuiz() {

    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });

}


function carregarQuestao() {

    const pergunta = perguntas[questaoAtual];

    const imagem = document.getElementById("imagemQuiz");

    imagem.src = pergunta.imagem;

    document.getElementById("numeroQuestao").textContent =
        questaoAtual + 1;

    document.getElementById("progresso").style.width =
        ((questaoAtual + 1) / perguntas.length * 100) + "%";

    document.getElementById("pontuacao").textContent =
        pontos;

    document.getElementById("explicacao").classList.remove("mostrar");

    document.getElementById("seloResultado").className = "selo";

    document.getElementById("seloResultado").textContent = "";

    document.getElementById("botaoReal").disabled = false;

    document.getElementById("botaoIA").disabled = false;

    respondeu = false;

}


function responder(respostaUsuario) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[questaoAtual];

    const acertou = respostaUsuario === pergunta.resposta;

    const selo = document.getElementById("seloResultado");

    const explicacao = document.getElementById("explicacao");

    const titulo = document.getElementById("tituloExplicacao");

    const texto = document.getElementById("textoExplicacao");


    if (acertou) {

        pontos++;

        selo.textContent = "✓ ACERTOU";
        selo.classList.add("correto");

        titulo.textContent = "Boa! Você acertou.";

    } else {

        selo.textContent = "✕ ERROU";
        selo.classList.add("errado");

        titulo.textContent = "Quase!";

    }


    const respostaCorreta =
        pergunta.resposta === "real"
            ? "A resposta era: IMAGEM REAL."
            : "A resposta era: GERADA POR IA.";


    texto.textContent =
        respostaCorreta + " " + pergunta.explicacao;


    document.getElementById("botaoReal").disabled = true;
    document.getElementById("botaoIA").disabled = true;

    explicacao.classList.add("mostrar");

    document.getElementById("pontuacao").textContent =
        pontos;

}


function proximaQuestao() {

    questaoAtual++;

    if (questaoAtual >= perguntas.length) {

        mostrarResultado();

        return;
    }

    carregarQuestao();

}


function mostrarResultado() {

    document
        .querySelector(".quiz-container")
        .style.display = "none";


    const resultado =
        document.getElementById("resultado");

    resultado.classList.add("mostrar");

    document
        .getElementById("pontuacaoFinal")
        .textContent = pontos;


    const mensagem =
        document.getElementById("mensagemFinal");

    const descricao =
        document.getElementById("descricaoFinal");


    if (pontos === 10) {

        mensagem.textContent =
            "Você tem um olhar muito atento.";

        descricao.textContent =
            "Você acertou todas as imagens. Mesmo assim, vale lembrar: identificar imagens geradas por IA apenas olhando para elas pode ser difícil.";

    } else if (pontos >= 7) {

        mensagem.textContent =
            "Você foi muito bem!";

        descricao.textContent =
            "Você conseguiu identificar a maioria das imagens. Mas será que conseguiria manter esse resultado diante de imagens ainda mais realistas?";

    } else if (pontos >= 5) {

        mensagem.textContent =
            "Você ficou no meio do caminho.";

        descricao.textContent =
            "Algumas imagens enganaram você. Isso mostra como os conteúdos gerados por IA estão ficando cada vez mais convincentes.";

    } else {

        mensagem.textContent =
            "A IA conseguiu te enganar.";

        descricao.textContent =
            "Não se preocupe. Identificar imagens geradas por IA pode ser difícil até mesmo quando analisamos os detalhes cuidadosamente.";

    }

}


function reiniciarQuiz() {

    questaoAtual = 0;
    pontos = 0;
    respondeu = false;

    document
        .getElementById("resultado")
        .classList.remove("mostrar");


    document
        .querySelector(".quiz-container")
        .style.display = "block";


    carregarQuestao();


    document
        .getElementById("quiz")
        .scrollIntoView({
            behavior: "smooth"
        });

}


carregarQuestao();
