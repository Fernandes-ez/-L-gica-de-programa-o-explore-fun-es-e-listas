let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';
function ok(){
    console.log('Botão clicado')
}
function alerta(){
    alert('JavaScript é ok')
}
function cidade(){
    let cidade = prompt('Insira uma cidade brasileira:')
    alert(`Estive em ${cidade} e lembrei de você!`)
}
function soma(){
    let numero1 = parseInt(prompt('Insira um número:'));
    let numero2 = parseInt(prompt('Insira um segundo número:'));
     let soma  = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${soma}`);
}