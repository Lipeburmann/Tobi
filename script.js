// ===================== REFERÊNCIAS DO DOM =====================
const botao = document.getElementById('btnCumprimentar');
const botaoAcariciar = document.getElementById('btnAcariciar');
const botaoComida = document.getElementById('btnComida');
const botaoBolinha = document.getElementById('btnBolinha');
const imagemGif = document.getElementById('tobiGif');
const titulo = document.getElementById('titulo');
const musicaFundo = document.getElementById('musicaFundo');
const somEfeito = document.getElementById('somEfeito');
const botaoSoneca = document.getElementById('btnSoneca');
const botaoAcordar = document.getElementById('btnAcordar');
const btnMusicaAnterior = document.getElementById('btnMusicaAnterior');
const btnMusicaProxima = document.getElementById('btnMusicaProxima');
const botaoAlbum = document.getElementById('btnAlbum');
const gifCumprimento = 'assets/mao_loop_count.gif';

musicaFundo.volume = 0.25;
somEfeito.volume = 1.0;

// ===================== SISTEMA DE AGENDAMENTO  =====================
let timeoutsPendentes = [];

function agendar(fn, delay) {
    const id = setTimeout(function () {
        timeoutsPendentes = timeoutsPendentes.filter(t => t !== id);
        fn();
    }, delay);
    timeoutsPendentes.push(id);
    return id;
}

function cancelarAgendamentos() {
    timeoutsPendentes.forEach(clearTimeout);
    timeoutsPendentes = [];
}

function pararSom() {
    somEfeito.pause();
    somEfeito.currentTime = 0;
    somEfeito.loop = false;
}

function trocarAcao() {
    cancelarAgendamentos();
    pararSom();
}

// ===================== HELPERS DE UI (evita repetição) =====================
function definirImagem(src, largura, altura) {
    imagemGif.src = src;
    imagemGif.style.maxWidth = largura || '300px';
    imagemGif.style.height = altura || '300px';
}

function esconderTitulo() {
    titulo.style.display = 'none';
}

function tocarEfeito(src) {
    somEfeito.pause();
    somEfeito.src = src;
    somEfeito.currentTime = 0;
    // .catch evita erro no console quando o play() é interrompido
    // por outro comando de troca de som logo em seguida
    somEfeito.play().catch(function (erro) {
        console.warn('Não foi possível tocar o efeito sonoro:', erro);
    });
}

// ===================== PLAYLIST / TROCA DE MÚSICA DE FUNDO =====================
const playlist = [
    'assets/fundo.mp3',
    'assets/fundo2.mp3',
    'assets/fundo3.mp3',
];

let indiceMusica = 0;

function trocarMusica(direcao) {
    if (playlist.length <= 1) return; // nada pra trocar se só tiver 1 música

    indiceMusica = (indiceMusica + direcao + playlist.length) % playlist.length;

    const estavaTocando = !musicaFundo.paused;
    musicaFundo.src = playlist[indiceMusica];
    musicaFundo.currentTime = 0;

    if (estavaTocando) {
        musicaFundo.play().catch(function () {});
    }
}

btnMusicaAnterior.addEventListener('click', function () {
    trocarMusica(-1);
});

btnMusicaProxima.addEventListener('click', function () {
    trocarMusica(1);
});

// ===================== Botão Álbum de Fotos =====================
botaoAlbum.addEventListener('click', function () {
    trocarAcao(); // corta qualquer som/ação pendente, igual as outras ações
    esconderTitulo();
    definirImagem('assets/album.gif');
});

// ===================== PRIMEIRO CLIQUE NA TELA (liga o latido em loop) =====================
document.addEventListener('click', function (event) {
    if (event.target !== botao) {
        imagemGif.src = 'assets/tobi_inicial.gif';
        imagemGif.style.maxWidth = '300px';
        imagemGif.style.height = '300px';

        somEfeito.loop = true;
        agendar(function () {
            tocarEfeito('assets/latido.m4a');
        }, 700);
    }
}, { once: true });

// ===================== Botão Cumprimentar =====================
botao.addEventListener('click', function () {
    trocarAcao();
    somEfeito.volume = 0.9;

    if (musicaFundo.paused) {
        musicaFundo.play().catch(function () {});
    }

    definirImagem(gifCumprimento);
    titulo.textContent = 'AU! AU!';
    titulo.style.display = '';

    botao.style.display = 'none';
    botaoAcariciar.style.display = 'inline-block';

    tocarEfeito('assets/gemido.mp3');
});

// ===================== Botão Acariciar =====================
botaoAcariciar.addEventListener('click', function () {
    trocarAcao();
    esconderTitulo();
    definirImagem('assets/mao_loop_count.gif');

    agendar(function () { tocarEfeito('assets/som_acariciar.mp3'); }, 1000);
    agendar(function () { tocarEfeito('assets/som_cumprimentar.ogg'); }, 1500);

    botaoComida.style.display = 'inline-block';
    botaoBolinha.style.display = 'inline-block';
    botaoSoneca.style.display = 'inline-block';
    botaoAlbum.style.display = 'inline-block';
});

// ===================== Botão Dar Comida =====================
botaoComida.addEventListener('click', function () {
    trocarAcao();
    esconderTitulo();
    definirImagem('assets/tobi_comendo.gif');

    agendar(function () {
        tocarEfeito('assets/som_comendo.mp3');
    }, 2000);
});

// ===================== Botão Jogar Bolinha =====================
botaoBolinha.addEventListener('click', function () {
    trocarAcao();
    esconderTitulo();
    definirImagem('assets/tobi_bolinha.gif');

    agendar(function () { tocarEfeito('assets/som_bolinha.mp3'); }, 1500);
});

// ===================== Botão Soneca (Dormir) =====================
botaoSoneca.addEventListener('click', function () {
    trocarAcao();
    esconderTitulo();
    definirImagem('assets/dormindo.gif');

    botaoAcariciar.style.display = 'none';
    botaoComida.style.display = 'none';
    botaoBolinha.style.display = 'none';
    botaoSoneca.style.display = 'none';
    botaoAlbum.style.display = 'none';

    agendar(function () {
        botaoAcordar.style.display = 'inline-block';
    }, 3000);

    agendar(function () {
        somEfeito.loop = true;
        somEfeito.volume = 0.5;
        tocarEfeito('assets/ronco.ogg');
    }, 2500);
});

// ===================== Botão Acordar =====================
botaoAcordar.addEventListener('click', function () {
    trocarAcao();
    botaoAcordar.style.display = 'none';

    definirImagem('assets/acordou.gif');

    agendar(function () {
        botaoAcariciar.style.display = 'inline-block';
        botaoComida.style.display = 'inline-block';
        botaoBolinha.style.display = 'inline-block';
        botaoSoneca.style.display = 'inline-block';
        botaoAlbum.style.display = 'inline-block';
    }, 2500);
});