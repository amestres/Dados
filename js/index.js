const dado1 = document.querySelector(".dado1")
const boton1 = document.querySelector(".boton1")
const dado2 = document.querySelector(".dado2")
const boton2 = document.querySelector(".boton2")
const dado3 = document.querySelector(".dado3")
const boton3 = document.querySelector(".boton3")
const fragment = document.createDocumentFragment();
let numeroAnterior = 0;

function lanzar(boton) {
    let numero = Math.floor(Math.random() * (6 - 1 ) + 1)
    while(numero === numeroAnterior){   
        numero = Math.floor(Math.random() * (6 - 1 ) + 1)
    }
    numeroAnterior = numero;

    ActualizarImagenDado(numero,boton);
    ActualizarHistorial(numero,boton);
}

function ActualizarImagenDado(numero,boton) {
    let queDadoActualizo;

    if(boton === "boton1"){
        queDadoActualizo = dado1;
    } else if (boton === "boton2"){
        queDadoActualizo = dado2;
    } else if (boton === "boton3"){
        queDadoActualizo = dado3;
    }
    queDadoActualizo.src = `./img/dado${numero}.png`
}

function ActualizarHistorial(numero,boton) {
    let p = document.createElement("p");
    let div;
    
    if(boton === "boton1"){
        div = document.querySelector(".container-historial1")
    } else if (boton === "boton2"){
        div = document.querySelector(".container-historial2")
    } else if (boton === "boton3"){
        div = document.querySelector(".container-historial3")
    }
    p.textContent = numero;
    div.appendChild(p);
}

boton1.addEventListener("click", () => lanzar("boton1"))
boton2.addEventListener("click", () => lanzar("boton2"))
boton3.addEventListener("click", () => lanzar("boton3"))


