let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto)
    {
        asignarTextoElemento('p', `Acertaste el Número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    // el usuario no acerto
    {
        if(numeroUsuario > numeroSecreto)
        {
            asignarTextoElemento('p', 'El Número Secreto es Menor');
        }
        else
        {
            asignarTextoElemento('p', 'El Número Secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = "";
}
function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se Sortearon todos los Números Posibles');
    }
    else
    {
        // si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() 
{
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    // iniciar el numero de intentos
    condicionesIniciales();
    // reiniciar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales()
{
    asignarTextoElemento('h1', "Juego del Número Secreto");
    asignarTextoElemento('p', `Indica un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
condicionesIniciales();