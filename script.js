const botao = document.getElementById('btnCumprimentar');
const botaoAcariciar = document.getElementById('btnAcariciar');
const botaoComida = document.getElementById('btnComida');
const botaoBolinha = document.getElementById('btnBolinha');
const imagemGif = document.getElementById('tobiGif');
const titulo = document.getElementById('titulo');
const musicaFundo = document.getElementById('musicaFundo');
const somEfeito = document.getElementById('somEfeito');
const gifCumprimento = 'assets/mao_loop_count.gif';

musicaFundo.volume = 0.1;
somEfeito.volume = 0.6;

let timeoutComida = null;

function tocarEfeito(src) {
    somEfeito.pause();
    somEfeito.src = src;
    somEfeito.currentTime = 0;
    somEfeito.play();
}

// Botão de Cumprimentar
botao.addEventListener('click', function() {
    somEfeito.volume = 0.9;
    if (timeoutComida) {
        clearTimeout(timeoutComida);
        timeoutComida = null;
    }

    if (musicaFundo.paused) {
        musicaFundo.play();
    }
    imagemGif.src = gifCumprimento;
    titulo.textContent = 'AU! AU!';
    titulo.style.display = '';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';

    // esconde o Cumprimentar e mostra o Acariciar no lugar
    botao.style.display = 'none';
    botaoAcariciar.style.display = 'inline-block';
});

// Botão de Acariciar
botaoAcariciar.addEventListener('click', function() {
    somEfeito.volume = 0.9;
    if (timeoutComida) {
        clearTimeout(timeoutComida);
        timeoutComida = null;
    }
     setTimeout(function() { tocarEfeito('assets/som_cumprimentar.ogg'); }, 1500);
    titulo.style.display = 'none';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/mao_loop_count.gif';

    setTimeout(function() { tocarEfeito('assets/som_acariciar.mp3'); }, 1000);

    // agora libera comida e bolinha
    botaoComida.style.display = 'inline-block';
    botaoBolinha.style.display = 'inline-block';
});

// Botão Dar Comida
botaoComida.addEventListener('click', function() {
    if (timeoutComida) {
        clearTimeout(timeoutComida);
    }
    titulo.style.display = 'none';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/tobi_comendo.gif';

    timeoutComida = setTimeout(function() {
        tocarEfeito('assets/som_comendo.mp3');
        timeoutComida = null;
    }, 2000);
});

// Botão Jogar Bolinha
botaoBolinha.addEventListener('click', function() {
    if (timeoutComida) {
        clearTimeout(timeoutComida);
        timeoutComida = null;
    }

    titulo.style.display = 'none';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/tobi_bolinha.gif';

    setTimeout(function() { tocarEfeito('assets/som_bolinha.mp3'); }, 1500);
});