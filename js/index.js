let rondasJugadas = 0;

function jugarJuego() {
    for (let ronda = 1; ronda <= 3; ronda++) {
        document.getElementById('intentos').textContent = 'Ronda ' + ronda + '. Adivina un número entre 1 y 5.';

        while (intentosRestantes > 0) {
            const numeroInput = parseInt(prompt('Ingresa un número entre 1 y 5:'));
            
            if (isNaN(numeroInput) || numeroInput < 1 || numeroInput > 5) {
                alert('Ingresa un número válido entre 1 y 5.');
            } else {
                verificarAdivinanza(numeroInput);
                if (numeroInput === numeroSecreto) {
                    break;
                }
            }
        }

        if (intentosRestantes === 0) {
            alert('Te quedaste sin intentos. El número secreto era ' + numeroSecreto + '.');
        }

        reiniciarJuego();
    }

    alert('Completaste todas las rondas. Muy bien');
}

function verificarAdivinanza(numeroInput) {
    const resultadoParrafo = document.getElementById('resultado');
    const intentosParrafo = document.getElementById('intentos');

    if (numeroInput === numeroSecreto) {
        resultadoParrafo.textContent = 'Adivinaste el número secreto, muy bien';
        rondasJugadas++;
    } else {
        intentosRestantes--;
        if (intentosRestantes > 0) {
            intentosParrafo.textContent = 'Te quedan ' + intentosRestantes + ' intentos.';
            resultadoParrafo.textContent = 'Incorrecto. Intenta de nuevo.';
        }
    }
}

function reiniciarJuego() {
    intentosRestantes = 3;
    numeroSecreto = generarNumeroSecreto();
    document.getElementById('intentos').textContent = '';
    document.getElementById('resultado').textContent = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 5) + 1;
}


jugarJuego();
