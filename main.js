const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")


//parseInt transforma valores(string) em número
//somar.addEventListener("click", () => {
 //   braco.value = parseInt(braco.value) + 1;
//})

//subtrair.addEventListener("click", () => {
 //   braco.value = parseInt(braco.value) - 1;
//})

//somar.addEventListener("click", () => {
//    manipulaDados("somar")
//})

//subtrair.addEventListener("click", () => {
//    manipulaDados("subtrair")
//})

const controles = document.querySelectorAll(".controle-ajuste")

controles.forEach( (controle) => {
    controle.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})


function manipulaDados(calculo) {
    if(calculo === "+") {
        braco.value = parseInt(braco.value) + 1;
    } else {
        braco.value = parseInt(braco.value) - 1;
    }
}