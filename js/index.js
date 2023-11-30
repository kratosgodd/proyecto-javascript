let intentosRestantes = 3;
let numeroSecreto = generarNumeroSecreto();

function verificarAdivinanza() {
    const numeroInput = parseInt(document.getElementById('numeroInput').value);
    const resultadoParrafo = document.getElementById('resultado');
    const intentosParrafo = document.getElementById('intentos');

    if (isNaN(numeroInput)) {
        resultadoParrafo.textContent = 'ingresa un número válido.';
    } else {
        if (numeroInput === numeroSecreto) {
            resultadoParrafo.textContent = 'Adivinaste el número secreto.';
            rondasJugadas++;
            reiniciarJuego();
        } else {
            intentosRestantes--;

            if (intentosRestantes > 0) {
                intentosParrafo.textContent = 'Te quedan ' + intentosRestantes + ' intentos.';
                resultadoParrafo.textContent = 'Incorrecto. Intenta de nuevo.';
            } else {
                resultadoParrafo.textContent = 'Agotaste tus intentos. El número secreto era ' + numeroSecreto + '.';
                rondasJugadas++;
                reiniciarJuego();
            }
        }
    }
}

function reiniciarJuego() {
    intentosRestantes = 3;
    numeroSecreto = generarNumeroSecreto();
    document.getElementById('intentos').textContent = '';
    document.getElementById('numeroInput').value = '';
    document.getElementById('resultado').textContent = '';

    if (rondasJugadas < 3) {
        document.getElementById('intentos').textContent = 'Ronda ' + (rondasJugadas + 1) + '. Intenta adivinar otro número.';
    } else {
        document.getElementById('intentos').textContent = 'Has completado todas las rondas. Muy bien';
    }
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 5) + 1;
}




