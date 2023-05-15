const controles = document.querySelectorAll(".controle-ajuste")

controles.forEach( (controle) => {
    controle.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})


function manipulaDados(calculo, pai) {
    const contador = pai.querySelector(".controle-contador")

    if(calculo === "+") {
        contador.value = parseInt(contador.value) + 1;
    } else {
        contador.value = parseInt(contador.value) - 1;
    }
}