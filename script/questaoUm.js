const botao = document.querySelector('.btn');


botao.addEventListener("click", function transformaEmArray(event) {
    event.preventDefault();
    
    const form = document.querySelector("form")
    
    const listaDeNumeros = document.querySelector('#listaDeNumeros')
    
    // pegando o valor do campo e transformando em vetor.
    let novoArray = listaDeNumeros.value.split(',');
    
    // encontrarMediana(novoArray)
    
    print(encontraMediana(novoArray))
    form.reset();
});

function encontraMediana(arr) {

    let lista = arr.sort((a, b) => a - b);
    
    let meio = Math.floor(lista.length / 2);
    
    let mediana = lista.length % 2 !== 0 ? lista[meio] : (lista[meio - 1] + lista[meio]) / 2;

    return mediana;

}

function print(mediana) {
    
    const secaoResultado = document.querySelector("#secaoResultado")
    
    const divElement = document.createElement("div")
    divElement.classList.add('resultado')

    divElement.textContent = mediana
    
    secaoResultado.appendChild(divElement)
}