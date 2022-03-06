
function print(txtEncrypt) {
    
    const secaoResultado = document.querySelector("#secaoResultado")
    
    const divElement = document.createElement("div")
    divElement.classList.add('resultado')

    divElement.textContent = txtEncrypt
    
    secaoResultado.appendChild(divElement)
}

function Encrypt(string) {

    let arrayStr = []; // Array que os caracteres a cada interação.
    let strSEspaço = string.split(" ").sort((a, b) => a - b).join("") // remove os espaços.
    let strLength = strSEspaço.length; // Quantidade de caracteres.
    let colunXY = Math.ceil(Math.sqrt(strLength)); // Raiz quadrada do tamanho da string(√T)
    let txtEncrypt = ""; // Armazena o resultado da criptografia.

    // Loop intera na string, fatiando o texto e guardando em colunas.
    for (var i = 0; i < strLength; i = i + colunXY) {
        arrayStr.push(strSEspaço.slice(i, i + colunXY));
    }

    for (let i = 0; i < colunXY; i++) {
        for (let j = 0; j < colunXY; j++) {
            if (arrayStr[j][i] != undefined) {
                txtEncrypt += arrayStr[j][i]
            }
        }
        txtEncrypt += " "
    }
 

    return txtEncrypt
}

const botao = document.querySelector('.btn');

botao.addEventListener("click", function transformaEmArray(event) {
    event.preventDefault();
    
    const form = document.querySelector("form")
    
    const campoTexto = document.querySelector('#String')
    
    let string = campoTexto.value;
    
    print(Encrypt(string))
    form.reset();
});






