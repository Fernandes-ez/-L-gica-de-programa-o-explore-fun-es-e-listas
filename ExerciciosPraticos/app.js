function ola() {
    alert('Olá mundo!');
}

function olaNome() {
    let nome = prompt('Insira seu nome');
    alert(`Olá ${nome}`);
}

function dobro() {
    let numero = prompt('Insira um número');
    return parseInt(numero) * 2;
}

let resultadoDobro = dobro();
alert(resultadoDobro);

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
let mediaCalculada = media(4,46,52)
alert(mediaCalculada);
function maior(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

function multiplicacao(num) {
    return num * num;
}