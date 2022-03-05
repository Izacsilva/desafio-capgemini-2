function abreModal(btnModal) {
    const burguerMenu = document.querySelector(".burgerMenu")
    burguerMenu.classList.add('esconde')
    const modal = document.querySelector(".bgModal")
    modal.classList.add('mostrar')
}

function fechaModal()  {
    const btnClose = document.querySelector(".btnFechar")
    burguerMenu.classList.remove('esconde')
    const modal = document.querySelector(".bgModal")
    modal.classList.remove('mostrar')
}

const btnClose = document.querySelector(".btnFechar")
const burguerMenu = document.querySelector(".burgerMenu")

burguerMenu.addEventListener('click', abreModal);
btnClose.addEventListener('click', fechaModal);