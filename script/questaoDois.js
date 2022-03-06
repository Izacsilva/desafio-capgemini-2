const botao = document.querySelector('.btn');

botao.addEventListener("click", function transformaEmArray(event) {
    event.preventDefault();
    
    
    const form = document.querySelector("form")
    
    const listaDeNumeros = document.querySelector('#listaDeNumeros').value.split(","); // Transforma string para Lista 
    const numeroX = document.querySelector('#numeroX').value; 
    
    let novoArray = listaDeNumeros;

    // Todo valor de input é igual a type "String", vamos passar os valores para type "Number"
    
    let x = Number(numeroX)

    for(let i = 0; i < novoArray.length; i++){
        novoArray[i] = parseInt(novoArray[i])
    }

    // Chama a função que verifica se tem pares.
    qtdePares(novoArray, x)

    form.reset()

    // Chama a função que printa o valor na tela.
    print(qtdePares(novoArray, x))
    

});

function qtdePares(lista, x) {
    quantosPares = 0;

    qtde = lista.length;
    
   // interando nos elementos da lista e escolhendo os pares.
   for (let i = 0; i < qtde; i++) {     
       
       for (let j = i+1; j < qtde; j++) {
           if (lista[i] - lista[j] == x || lista[j] - lista[i] == x ) {
            quantosPares++;
           }
       }

   }

   return quantosPares;
   
}

function print(quantosPares) {
    const secaoResultado = document.querySelector("#secaoResultado")
    
    const divElement = document.createElement("div")
    divElement.classList.add('resultado')

    divElement.textContent = quantosPares
    
    secaoResultado.appendChild(divElement)
}




