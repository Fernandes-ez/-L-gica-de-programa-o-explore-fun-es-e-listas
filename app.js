let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoDaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML  = texto;
}
exibirTextoDaTela('h1','Jogo do número secreto');
exibirTextoDaTela('p','Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if  (chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
        exibirTextoDaTela('h1', 'Acertou!');
        exibirTextoDaTela('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoDaTela('p', `o número secreto é menor do que ${chute}`);
        }else{
            exibirTextoDaTela('p', `o número secreto é maior do que ${chute}`);
        }
        tentativas++;
        limparCampo()
    }
}


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ""; 
}