const botao = document.getElementById('btnCumprimentar');
const botaoAcariciar = document.getElementById('btnAcariciar');
const botaoComida = document.getElementById('btnComida');
const botaoBolinha = document.getElementById('btnBolinha');
const imagemGif = document.getElementById('tobiGif');
const titulo = document.getElementById('titulo');
const musicaFundo = document.getElementById('musicaFundo');
const somEfeito = document.getElementById('somEfeito');
const gifCumprimento = 'assets/mao_loop_count.gif';
const botaoSoneca = document.getElementById('btnSoneca');
const botaoAcordar = document.getElementById('btnAcordar');

musicaFundo.volume = 0.25;

// 1. Variáveis para guardar os cronômetros de forma organizada:
let cronometro1 = null;
let cronometro2 = null;

// 2. FUNÇÃO SALVA-VIDAS: Limpa qualquer bug de clique rápido!
function pararTudo() {
    clearTimeout(cronometro1);
    clearTimeout(cronometro2);
    somEfeito.loop = false; // Corta roncos ou ganidos infinitos
    somEfeito.volume = 1.0; // Garante que o volume volte ao máximo
    somEfeito.pause();      // Para o som imediatamente
    somEfeito.currentTime = 0;
}

function tocarEfeito(src) {
    somEfeito.src = src;
    somEfeito.play();
}

// Aguarda o primeiro clique na tela para ligar o latido:
document.addEventListener('click', function(event) {
    if (event.target !== botao) {
        imagemGif.src = 'assets/tobi_inicial.gif';
        imagemGif.style.maxWidth = '300px';
        imagemGif.style.height = '300px';

        somEfeito.loop = true;
        cronometro1 = setTimeout(function() {
            tocarEfeito('assets/latido.m4a');
        }, 700);
    }
}, { once: true });

// Botão de Cumprimentar
botao.addEventListener('click', function() {
    pararTudo(); // Corta o latido inicial da tela imediatamente!
    
    if (musicaFundo.paused) {
        musicaFundo.play();
    }
    
    imagemGif.src = gifCumprimento;
    titulo.textContent = 'AU! AU!';
    titulo.style.display = '';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';

    botao.style.display = 'none';
    botaoAcariciar.style.display = 'inline-block';
    
    somEfeito.loop = true;
    tocarEfeito('assets/gemido.mp3'); 
});

// Botão de Acariciar
botaoAcariciar.addEventListener('click', function() {
    pararTudo(); 
    
    titulo.style.display = 'none';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/mao_loop_count.gif';

    // Guardamos os DOIS cronômetros para poder cancelá-los se a pessoa clicar em outro botão rápido:
    cronometro1 = setTimeout(function() { tocarEfeito('assets/som_acariciar.mp3'); }, 1000);
    cronometro2 = setTimeout(function() { tocarEfeito('assets/som_cumprimentar.ogg'); }, 1500);

    botaoComida.style.display = 'inline-block';
    botaoBolinha.style.display = 'inline-block';
    botaoSoneca.style.display = 'inline-block';
});

// Botão Dar Comida
botaoComida.addEventListener('click', function() {
    pararTudo(); 
    
    titulo.style.display = 'none';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/tobi_comendo.gif';

    cronometro1 = setTimeout(function() {
        tocarEfeito('assets/som_comendo.mp3');
    }, 2000);
});

// Botão Jogar Bolinha
botaoBolinha.addEventListener('click', function() {
    pararTudo(); 
    
    titulo.style.display = 'none';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/tobi_bolinha.gif';

    cronometro1 = setTimeout(function() { tocarEfeito('assets/som_bolinha.mp3'); }, 1500);
});

// Botão Soneca (Dormir)
botaoSoneca.addEventListener('click', function() {
    pararTudo(); 
    
    titulo.style.display = 'none';
    imagemGif.style.maxWidth = '300px';
    imagemGif.style.height = '300px';
    imagemGif.src = 'assets/dormindo.gif';

    botaoAcariciar.style.display = 'none'; 
    botaoComida.style.display = 'none';
    botaoBolinha.style.display = 'none';
    botaoSoneca.style.display = 'none';
    botaoAcordar.style.display = 'inline-block';

    cronometro1 = setTimeout(function() { 
        somEfeito.loop = true; 
        somEfeito.volume = 0.5; // Abaixa o volume só na hora do ronco
        tocarEfeito('assets/ronco.ogg'); 
    }, 2500);
});

// Botão Acordar
botaoAcordar.addEventListener('click', function() {
    pararTudo(); // Corta o cronômetro do ronco e reseta o volume pra 1.0!
    
    botaoAcordar.style.display = 'none';
    botaoAcariciar.style.display = 'inline-block';
    botaoComida.style.display = 'inline-block';
    botaoBolinha.style.display = 'inline-block';
    botaoSoneca.style.display = 'inline-block';

    imagemGif.src = 'assets/acordou.gif';
    tocarEfeito('assets/latido.m4a');
});