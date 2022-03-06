const botao = document.querySelector('.btn');

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

botao.addEventListener("click", function transformaEmArray(event) {
    event.preventDefault();

    /* Estes comandos limpam as mensagens de Erro. */
    const secaoPrincipal = document.querySelector(".principal")
    const div = secaoPrincipal.querySelector("div")
    div.innerHTML = ""
    /* ------- */
    
    /* Ao clicar no botão os elementos do formulário são selecionados. */
    const form = document.querySelector("form")
    const listaDeNumeros = document.querySelector('#listaDeNumeros')
    /* ------- */


   

    
    
    // pegando o valor do campo e transformando em vetor.
    let novoArray = listaDeNumeros.value.split(',');
    
    /* Aqui está uma série de testes que validam o formulário.  */

    // O loop transforma todos os elementos para Number, para validar o campo e não permitir o uso de string.
    for (let i = 0; i < novoArray.length; i++) {
        novoArray[i] = parseInt(novoArray[i])
        
        if(typeof novoArray[i] === "string" || isNaN(novoArray[i])) {
            teste.texto();
            return
        }
    }

     if(listaDeNumeros.value === "") {
        teste.campoVazio();
        
        return
    }

    if(novoArray.length < 3) {
        teste.tamanhoMaiorQ3();
        return
    }

    if (novoArray.length % 2 === 0) {
        teste.impar();
        return;
      }
    
 
    print(encontraMediana(novoArray))
    form.reset();
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
        span.textContent = "A lista deve conter pelo menos 3 elementos!"

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

    impar: () => {
        const secaoPrincipal = document.querySelector(".principal")
        const div = secaoPrincipal.querySelector("div")

        div.classList.add("alertErro")
        const span = document.createElement("span")
        span.textContent = "O total de Elementos na lista de ver ímpar"

        div.appendChild(span)
    }
}