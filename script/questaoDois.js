const botao = document.querySelector('.btn');

botao.addEventListener("click", function transformaEmArray(event) {
    event.preventDefault();
    let novoArray = [];
    // Toda entrada de dados html do tipo "<input>" é uma string, para transforma-la em um
    // "Array" vamos usar o método split(), usando a vírgula para separar os número, por item na lista.
    const listaNumeros = document.querySelector('#listaNumeros');
    const numeroX = document.querySelector('#numX');


    novoArray = listaNumeros.value.split(',');
    valorDeX = numeroX.value;

    console.log(novoArray, valorDeX);

    ordemDeInteiros(valorDeX, novoArray);
});

function ordemDeInteiros(x, lista) {
    //vamos ordenar os elementos e depois colocar a ordem em decrescente.
    let arrayEmOrdem = lista.sort()
    arrayEmOrdem.reverse()

    // Transformar nossos dados para números.

    let numeroX = Number(x)
    
    // Passa por cada elemento da lista, transformando-o de String para type == Number
    // e retornando-o como números, para a lista.
    for (let i = 0; i < arrayEmOrdem.length; i++) { 
        arrayEmOrdem[i] = parseInt(arrayEmOrdem[i]);
        console.log(typeof(arrayEmOrdem[i]))
      }
    
      // Então vamos retirar os números repetidos.
      let arrayUnico = [...new Set(arrayEmOrdem)]; //retira os repetidos
    console.log(numeroX, arrayUnico)

}