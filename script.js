const caixaPrincipal = document.querySelector (".caixa-principal");

const caixaPerguntas = document.querySelector (".caixa-principal");

const caixaAlternativas = document.querySelector (".caixa-principal");

const caixaResultado = document.querySelector (".caixa-principal");

const caixaResultado = document.querySelector (".caixa-principal");

const lista = [ ];
const perguntas [
    {
        enunciado: "perguntas1"
        Alternativa:["Alternativa 1","Alternativa 2"]
    }

 {
        enunciado: "perguntas2"
        Alternativa:["Alternativa 1","Alternativa 2"]
    }

     {
        enunciado: "perguntas3"
        Alternativa:["Alternativa 1","Alternativa 2"]
    }

     {
        enunciado: "perguntas4"
        Alternativa:["Alternativa 1","Alternativa 2"]
    }

     {
        enunciado: "perguntas5"
        Alternativa:["Alternativa 1","Alternativa 2"]
    }

];

let atual = 0
let perguntasAtual;

function mostraPerguntas{
    perguntasAtual = pergunta(atual);
    caixaPerguntas.textContent = perguntasAtual.enunciado;

}

    mostraPerguntas();


