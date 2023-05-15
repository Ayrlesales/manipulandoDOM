const controles = document.querySelectorAll("[data-controle]")

controles.forEach( (controle) => {
    controle.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})


function manipulaDados(calculo, pai) {
    const contador = pai.querySelector("[data-contador]")

    if(calculo === "+") {
        contador.value = parseInt(contador.value) + 1;
    } else {
        contador.value = parseInt(contador.value) - 1;
    }
}