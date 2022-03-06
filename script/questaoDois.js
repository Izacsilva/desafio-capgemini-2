const botao = document.querySelector('.btn');

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



botao.addEventListener("click", function transformaEmArray(event) {
    event.preventDefault();
    
    /* Estes comandos limpam as mensagens de Erro. */
    const secaoPrincipal = document.querySelector(".principal")
    const div = secaoPrincipal.querySelector("div")
    div.innerHTML = ""
    /* ------- */
    
    const form = document.querySelector("form")
    
    const listaDeNumeros = document.querySelector('#listaDeNumeros').value.split(","); // Transforma string para Lista 
    const numeroX = document.querySelector('#numeroX').value; 
    
    let novoArray = listaDeNumeros;

    // Todo valor de input é igual a type "String", vamos passar os valores para type "Number"
    
    let x = Number(numeroX)

    for(let i = 0; i < novoArray.length; i++){
        novoArray[i] = parseInt(novoArray[i])
        if(typeof novoArray[i] === "string" || isNaN(novoArray[i])) {
            teste.texto();
            return
        }
    }

    // Chama a função que verifica se tem pares.

    if(listaDeNumeros == "" || x == "") {
        teste.campoVazio();
        
        return
    }

    if(novoArray.length === 1) {
        teste.tamanhoMaiorQ3();
        return
    }
 

    // Chama a função que printa o valor na tela.
    print(qtdePares(novoArray, x))
    
    form.reset()

});

let teste = {
    campoVazio: () => {
        const secaoPrincipal = document.querySelector(".principal")
        const div = secaoPrincipal.querySelector("div")

        div.classList.add("alertErro")
        const span = document.createElement("span")
        span.textContent = "Campo vazio, escreva uma lista com números"

        div.appendChild(span)
    },

    tamanhoMaiorQ3: () => {
        const secaoPrincipal = document.querySelector(".principal")
        const div = secaoPrincipal.querySelector("div")

        div.classList.add("alertErro")
        const span = document.createElement("span")
        span.textContent = "A lista deve conter pelo menos 2 elementos!"

        div.appendChild(span)
    },

    texto: () => {
        const secaoPrincipal = document.querySelector(".principal")
        const div = secaoPrincipal.querySelector("div")

        div.classList.add("alertErro")
        const span = document.createElement("span")
        span.textContent = "Só é permitido números!"

        div.appendChild(span)
    },

}




