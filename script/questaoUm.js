

function printMediana(array) {
    let mediana = (array.length - 1) / 2

    console.log(array[mediana])
}
const botao = document.querySelector('.btn');

botao.addEventListener("click", function transformaEmArray(event) {
    event.preventDefault();
    let novoArray = [];
    // Toda entrada de dados html do tipo "<input>" é uma string, para transforma-la em um
    // "Array" vamos usar o método split(), usando a vírgula para separar os número, por item na lista.
    const listaNumeros = document.querySelector('#listaNumeros').value.split(',');
    
    novoArray = listaNumeros;

    colocaEmOrdem(novoArray);
});

function colocaEmOrdem(lista) {
    let arrayEmOrdem = lista.sort()

    printMediana(arrayEmOrdem)

} 

// testa se tem texto no campo, testar se tem caracter especial, testar se tem valores se virgula
// testar se o valor é impar.