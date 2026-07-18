const botao = document.getElementById('btnCumprimentar');
const botaoAcariciar = document.getElementById('btnAcariciar');
const botaoComida = document.getElementById('btnComida');
const botaoBolinha = document.getElementById('btnBolinha');
const imagemGif = document.getElementById('tobiGif');
const titulo = document.getElementById('titulo');
const musicaFundo = document.getElementById('musicaFundo');
const somEfeito = document.getElementById('somEfeito');
const gifCumprimento = 'assets/mao_loop_count.gif';
musicaFundo.volume = 0.75;
somEfeito.volume = 1;
let timeoutComida = null;

// Aguarda o primeiro clique na tela para ligar o latido em loop:
document.addEventListener('click', function(event) {
    if (event.target !== botao) {
        // troca pra imagem animada no exato momento do clique
        imagemGif.src = 'assets/tobi_inicial.gif';
        imagemGif.style.maxWidth = '300px';
        imagemGif.style.height = '300px';

        somEfeito.loop = true;
        setTimeout(function() {
            tocarEfeito('assets/latido.m4a');
        }, 1000);
    }
}, { once: true });



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

    // para o latido em loop
    somEfeito.loop = false;
    somEfeito.pause();
    somEfeito.currentTime = 0;

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
    tocarEfeito('assets/gemido.mp3'); // Toca o barulhinho dele pedindo carinho
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
