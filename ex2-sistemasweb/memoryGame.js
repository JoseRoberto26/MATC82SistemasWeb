var cartas = document.querySelectorAll("carta")
console.log(cartas)
var contador = 0;
var auxiliar = 0;
let temCartaVirada = false;
let primeiraCarta, segundaCarta;
let podeVirar = true;

(function embaralhar(array) {
    array.sort(function() {
        return 0.5 - Math.random()
    });
})();

function desativaCartas() {
    primeiraCarta.removeEventListener('click', viraCarta);
    segundaCarta.removeEventListener('click', viraCarta);
    primeiraCarta = null
    segundaCarta = null
    temCartaVirada = false
    podeVirar = true
}

function viraCarta() {
    if (podeVirar) {
        if (this === primeiraCarta) {
            return;
        }
        this.classList.add('virar');
        if (temCartaVirada == false) {
            temCartaVirada = true;
            primeiraCarta = this;
            auxiliar = 1;
            return;
        }

        segundaCarta = this;
        temCartaVirada = false;
        maisUmaJogada()
        verificaAcerto();
    }
}

function desvirarCartas() {
    podeVirar = false;
    primeiraCarta.classList.remove('flip');
    primeiraCarta.classList.remove('flip');
    setTimeout(() => { podeVirar = true }, 1000)
    temCartaVirada = false
    podeVirar = true
    primeiraCarta = null
    segundaCarta = null

}

cartas.forEach(e => e.addEventListener('click', viraCarta));

function maisUmaJogada() {
    contador += 1;
    auxiliar = 0;
}

function verificaAcerto() {
    if (primeiraCarta.dataset.name == segundaCarta.dataset.name) {
        desativaCartas();
        return;
    } else {
        desvirarCartas();
    }
}