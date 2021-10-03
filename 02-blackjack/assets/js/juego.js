/*
* 2C = Two of Clubs ('Tréboles')
* 2D = Two of Diamonds ('Diamantes')
* 2H = Two of Hearts ('Corazones')
* 2S = Two of Spades ('Picas')
*/

(() => {
    'use strict'


    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['J', 'Q', 'K', 'A'];

    //Referencias del HTML, DOM
    const btnPedir = document.querySelector('#btnPedirCarta'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevoJuego = document.querySelector('#btnNuevoJuego');


    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    // let puntosJugador = 0,
    // puntosComputadora = 0;
    // La computadora siempre es el 
    let puntosJugadores = [];

    //Esta función inicializa el juego
    const iniciarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let index = 0; index < numJugadores; index++) {
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elemento => elemento.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
        console.log(puntosJugadores);

    }
    // Esta función crea una nueva baraja
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (const tipo of tipos) {
                deck.push(`${i}${tipo}`);
            }
        }
        for (const tip of tipos) {
            for (const especial of especiales) {
                deck.push(`${especial}${tip}`);
            }
        }
        return _.shuffle(deck);;

    }


    //función permite coger una carta de la baraja
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No quedan cartas en la baraja';
        }
        return deck.pop();
    }




    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }

    // Turno 0: primer jugador y el último siempre será la computadora 
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }


    //Crea la carta en el espacio respectivo
    const crearCarta = (carta, turno) => {
        let imgCarta = document.createElement("img");
        imgCarta.classList.add('carta')
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.alt = "Carta de la computadora";
        divCartasJugadores[turno].append(imgCarta);
    }
    //Turno computadora
    const turnoComputadora = (puntosMinimos) => {
        
        
        let puntosComputadora = 0;
        console.log({puntosComputadora, puntosMinimos});
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert("Empate, nadie Gana");
            } else if (puntosMinimos > 21) {
                alert("La computadora gana!!");
            } else if (puntosComputadora > 21) {
                alert("El jugador a Ganado!!");
            } else {
                alert("La computadora gana");
            }

        }, 100);
    }

    // Eventos 
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();

        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            // console.warn('Ohh game over')
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)
        } else if (puntosJugador === 21) {
            // console.warn('Blackjack');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)
        }
    });

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });


    btnNuevoJuego.addEventListener('click', () => {
        iniciarJuego();
    });


})();
