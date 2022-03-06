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
