function ola(){
    alert('Olá mundo!');
}
function olaNome(){
    let nome = prompt('Insira seu nome');
    alert(`Ola ${nome}`);
}
function dobro(numero){
    let numero = prompt('Insira um número')
    return parseInt(numero)*2;
}
let resultadoDobro = dobro
alert
function media(n1,n2,n3){
    let media = parseInt((n1+n2+n3)/3);
    return(media);
}
function maior(n1,n2){
    if(n1>n2){
        return(n1)
    }else{
        return(n2)
    }
}
function multiplicacao(num){
    return parseInt(num*num);
}